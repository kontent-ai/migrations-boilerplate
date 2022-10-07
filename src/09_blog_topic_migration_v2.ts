import { MigrationModule } from "@kontent-ai/cli";
import { ManagementClient } from "@kontent-ai/management-sdk";
import { BlogPostModel, BlogTopicModel } from "./models";
import { contentTypes } from "./models/project/contentTypes";
import KontentService from "./services/KontentService";
import { getElementsParamCodename } from "./utils/kontentUtils";

const PUBLISHED = "published";
const ARCHIVED = "archived_32a589a";
const ARCHIVED_2 = "archived";

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
	apiClient: ManagementClient,
	blogPost: BlogPostModel,
	blogTopic: BlogTopicModel,
	topicCodename: string
) => {
	try {
		return await apiClient
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

const createNewVersionOfBlogPost = async (
	apiClient: ManagementClient,
	blogPost: BlogPostModel
) => {
	try {
		return await apiClient
			.createNewVersionOfLanguageVariant()
			.byItemCodename(blogPost.system.codename)
			.byLanguageCodename("default")
			.toPromise();
	} catch (error) {
		console.error(error);
	}
};

const publishNewVersionOfBlogPost = async (
	apiClient: ManagementClient,
	blogPost: BlogPostModel
) => {
	try {
		return await apiClient
			.publishLanguageVariant()
			.byItemCodename(blogPost.system.codename)
			.byLanguageCodename("default")
			.withoutData()
			.toPromise();
	} catch (error) {
		console.error(error);
	}
};

const migration: MigrationModule = {
	order: 9,
	run: async (apiClient: ManagementClient) => {
		const topics = await getAllTopics();
		const blogPosts = await getAllBlogPosts();

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
						await createNewVersionOfBlogPost(apiClient, post);
						await upsertBlogPostLangVariant(
							apiClient,
							post,
							topic,
							topicCodename
						);
						await publishNewVersionOfBlogPost(apiClient, post);
						break;
					default:
						await upsertBlogPostLangVariant(
							apiClient,
							post,
							topic,
							topicCodename
						);
				}
			};

			asyncSwitch(workflowStep);
		});
	},
};

export default migration;
