import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { MigrationModule } from "@kontent-ai/cli";
import {
	ContentTypeModels,
	ManagementClient,
} from "@kontent-ai/management-sdk";
import KontentService from "../services/KontentService";

const PUBLISHED = "published";
const ARCHIVED = "archived_32a589a";
const ARCHIVED_2 = "archived";
const INCOMPLETE_ITEM_ERROR_MSG =
	"Publishing item failed because some of its elements are incomplete.";

dotenv.config();

const managementClient = new ManagementClient({
	projectId: process.env.KONTENT_PROJECT_ID,
	apiKey: process.env.KONTENT_MANAGEMENT_API
		? process.env.KONTENT_MANAGEMENT_API
		: "",
	retryStrategy: {
		maxAttempts: 1000,
	},
});

const getAllBlogPosts = async (): Promise<BlogPostModel[]> => {
	try {
		const res = await KontentService.Instance(true)
			.deliveryClient.items<BlogPostModel>()
			.type(contentTypes.blog_post.codename)
			.emptyFilter(
				getElementsParamCodename(
					contentTypes.blog_post.elements.topic_c2ebd37.codename
				)
			)
			.notEmptyFilter(
				getElementsParamCodename(contentTypes.blog_post.elements.topic.codename)
			)
			.toPromise();

		return res.data.items;
	} catch (error) {
		console.error(error);
	}
};

const getAllTopics = async (): Promise<BlogTopicModel[]> => {
	try {
		const res = await KontentService.Instance(true)
			.deliveryClient.items<BlogTopicModel>()
			.type(contentTypes.blog_topic.codename)
			.toPromise();

		return res.data.items;
	} catch (error) {
		console.error(error);
	}
};

const upsertBlogPostLangVariant = async (
	blogPost: BlogPostModel,
	blogTopic: BlogTopicModel,
	topicCodename: string
) => {
	try {
		return await managementClient
			.upsertLanguageVariant()
			.byItemCodename(blogPost.system.codename)
			.byLanguageCodename("default")
			.withData((builder) => [
				builder.linkedItemsElement({
					element: {
						codename: topicCodename,
					},
					value: [
						{
							codename: blogTopic.system.codename,
						},
					],
				}),
			])
			.toPromise();
	} catch (error) {
		console.error(error);
	}
};

const createNewVersionOfBlogPost = async (blogPost: BlogPostModel) => {
	try {
		return await managementClient
			.createNewVersionOfLanguageVariant()
			.byItemCodename(blogPost.system.codename)
			.byLanguageCodename("default")
			.toPromise();
	} catch (error) {
		console.error(error);
	}
};

const publishNewVersionOfBlogPost = async (
	blogPost: BlogPostModel,
	inCompletePostsFilePath
) => {
	try {
		return await managementClient
			.publishLanguageVariant()
			.byItemCodename(blogPost.system.codename)
			.byLanguageCodename("default")
			.withoutData()
			.toPromise();
	} catch (error) {
		if (error.message === INCOMPLETE_ITEM_ERROR_MSG) {
			const data = `Blog post https://kontent.ai/${blogPost.elements.urlSlug.value} is incomplete and cannot be published. \n`;

			await fs.promises.appendFile(inCompletePostsFilePath, data);

			return;
		}
	}
};

const migrateTopics = async () => {
	const topics = await getAllTopics();
	const blogPosts = await getAllBlogPosts();
	const inCompletePostsFile = path.join(
		process.cwd(),
		"public",
		"incomplete-posts.txt"
	);

	if (fs.existsSync(inCompletePostsFile)) {
		await fs.promises.unlink(inCompletePostsFile);
	}

	blogPosts.forEach((post) => {
		const taxonomyTopicCodename = post.elements.topic.value[0].codename;
		const workflowStep = post.system.workflowStep;
		const topic = topics.find(
			(t) => t.elements.topic.value[0].codename === taxonomyTopicCodename
		);
		const topicCodename =
			contentTypes.blog_post.elements.topic_c2ebd37.codename;

		const asyncSwitch = async (step) => {
			switch (step) {
				case ARCHIVED:
					break;
				case ARCHIVED_2:
					break;
				case PUBLISHED:
					await createNewVersionOfBlogPost(post);
					await upsertBlogPostLangVariant(post, topic, topicCodename);
					await publishNewVersionOfBlogPost(post, inCompletePostsFile);
					break;
				default:
					await upsertBlogPostLangVariant(post, topic, topicCodename);
			}
		};

		asyncSwitch(workflowStep);
	});
};

migrateTopics();
