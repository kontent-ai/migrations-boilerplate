import { ManagementClient } from "@kontent-ai/management-sdk";
import KontentService from "../services/KontentService";
import { contentTypes, EventModel, WebinarTopicModel } from "../models";
import { getElementsParamCodename } from "../utils/kontentUtils";
import { ARCHIVED, ARCHIVED_2, PUBLISHED } from "../constants";

export const updateWebinarsPageContentType = async (
	apiClient: ManagementClient
) => {
	try {
		await apiClient
			.modifyContentType()
			.byTypeCodename(contentTypes.webinars_page.codename)
			.withData([
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.hero_perex.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.hero_image.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.release_projects.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.live_webinars_heading.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.on_demand_webinars_heading.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.emea_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.americas_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.apac_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.topic_card_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.reservation_form_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.related_dates_title.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.consent_elements.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.webinar_topics.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.on_demand_webinars.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinars_page.elements.on_demand_thank_you___title.codename}`,
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Featured",
						type: "modular_content",
						guidelines: "Featured webinars/events",
						is_required: true,
						item_count_limit: {
							condition: "at_most",
							value: 3,
						},
						allowed_content_types: [
							{
								codename: contentTypes.event.codename,
							},
							{
								codename: contentTypes.webinar_topic.codename,
							},
						],
						content_group: {
							codename: "webinars",
						},
						codename: "featured",
					},
				},
			])
			.toPromise();
	} catch (error) {
		throw new Error(
			`Error in updateWebinarsPageContentType - ${error.message}`
		);
	}
};

export const updateWebinarTopicContentType = async (
	apiClient: ManagementClient
) => {
	try {
		await apiClient
			.modifyContentType()
			.byTypeCodename(contentTypes.webinar_topic.codename)
			.withData([
				{ op: "replace", path: "/name", value: "Webinar" },
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_topic.elements.subtitle.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_topic.elements.sticky.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_topic.elements.type.codename}`,
				},
				{
					op: "addInto",
					path: "/content_groups",
					value: {
						name: "URLs",
						codename: "urls",
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Registration URL",
						type: "text",
						guidelines:
							"Used for attending webinars where we're not collecting registrations",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Recording URL",
						type: "text",
						guidelines: "URL of a webinar recording (YouTube)",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Partnership",
						type: "modular_content",
						guidelines: "Partner for this webinar",
						item_count_limit: {
							condition: "at_most",
							value: 1,
						},
						allowed_content_types: [
							{
								codename: contentTypes.partner.codename,
							},
						],
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Speakers",
						type: "modular_content",
						guidelines: "Speakers for this webinar",
						allowed_content_types: [
							{
								codename: contentTypes.author.codename,
							},
						],
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Wrap Up",
						type: "rich_text",
						guidelines: "Post-webinar wrap-up",
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Overview",
						type: "rich_text",
						guidelines:
							"Short summary of the webinar (displayed on the webinar card)",
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "URL slug custom value",
						type: "text",
						guidelines:
							"Custom url slug value from which the slug will be generated e.g. some-random-slug",
						codename: "url_slug_custom_value",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "URL Slug",
						type: "url_slug",
						depends_on: {
							element: {
								codename: "url_slug_custom_value",
							},
						},
						is_required: true,
						guidelines:
							"URL slug for this webinar (e.g. /content-modeling-1-on-1)",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "replace",
					path: `/elements/codename:${contentTypes.webinar_topic.elements.webinar_dates.codename}/item_count_limit`,
					value: {
						condition: "at_most",
						value: 3,
					},
				},
				// {
				// 	op: "addInto",
				// 	path: "/elements",
				// 	value: {
				// 		name: "URL Slug history",
				// 		type: "custom",
				// 		guidelines: "URL slug history",
				// 		content_group: {
				// 			codename: "urls",
				// 		},
				// 	},
				// },
			])
			.toPromise();
	} catch (error) {
		throw new Error(
			`Error in updateWebinarTopicContentType - ${error.message}`
		);
	}
};

export const updateWebinarDateContentType = async (
	apiClient: ManagementClient
) => {
	try {
		await apiClient
			.modifyContentType()
			.byTypeCodename(contentTypes.webinar_date.codename)
			.withData([
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.is_external.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.url_slug.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.url_slug_value.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.webinar_registration_url.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.time_zone.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.webinar_date.elements.description.codename}`,
				},
			])
			.toPromise();
	} catch (error) {
		throw new Error(`Error in updateWebinarDateContentType - ${error.message}`);
	}
};

export const updateEventDateContentType = async (
	apiClient: ManagementClient
) => {
	try {
		await apiClient
			.modifyContentType()
			.byTypeCodename(contentTypes.event_date.codename)
			.withData([
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.event_date.elements.consent.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.event_date.elements.url_slug.codename}`,
				},
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.event_date.elements.description.codename}`,
				},
			])
			.toPromise();
	} catch (error) {
		throw new Error(`Error in updateWebinarDateContentType - ${error.message}`);
	}
};

export const updateEventContentType = async (apiClient: ManagementClient) => {
	try {
		await apiClient
			.modifyContentType()
			.byTypeCodename(contentTypes.event.codename)
			.withData([
				{
					op: "remove",
					path: `/elements/codename:${contentTypes.event.elements.sticky.codename}`,
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Wrap Up",
						type: "rich_text",
						guidelines: "Post-event wrap-up",
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Overview",
						type: "rich_text",
						guidelines:
							"Short summary of the event (displayed on the event card)",
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Partnership",
						type: "modular_content",
						guidelines: "Partner for this event",
						item_count_limit: {
							condition: "at_most",
							value: 1,
						},
						allowed_content_types: [
							{
								codename: contentTypes.partner.codename,
							},
						],
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Speakers",
						type: "modular_content",
						guidelines: "Speakers for this event",
						allowed_content_types: [
							{
								codename: contentTypes.author.codename,
							},
						],
						content_group: {
							codename: "general",
						},
					},
				},
				{
					op: "addInto",
					path: "/content_groups",
					value: {
						name: "URLs",
						codename: "urls",
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "Registration URL",
						type: "text",
						guidelines:
							"Used for attending webinars where we're not collecting registrations",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "URL slug custom value",
						type: "text",
						guidelines:
							"Custom value from which the URL Slug will be generated e.g. random-slug-value",
						codename: "url_slug_custom_value",
						content_group: {
							codename: "urls",
						},
					},
				},
				{
					op: "addInto",
					path: "/elements",
					value: {
						name: "URL Slug",
						type: "url_slug",
						depends_on: {
							element: {
								codename: "url_slug_custom_value",
							},
						},
						is_required: true,
						guidelines: "URL slug for this webinar (e.g. /horizons-2022)",
						content_group: {
							codename: "urls",
						},
					},
				},
			])
			.toPromise();
	} catch (error) {
		throw new Error(`Error in updateEventContentType - ${error.message}`);
	}
};

export const updateWebinarSlugs = async (apiClient: ManagementClient) => {
	try {
		// Get all topics with dates
		const topicsResponse = await KontentService.Instance()
			.deliveryClient.items<WebinarTopicModel>()
			.type(contentTypes.webinar_topic.codename)
			.notEmptyFilter(
				getElementsParamCodename(
					contentTypes.webinar_topic.elements.webinar_dates.codename
				)
			)
			.toPromise();

		const topics = topicsResponse.data.items;

		// Loop through the topics and update the topic slug with slug of the first date
		for (const topic of topics) {
			const slug =
				topic.elements.webinarDates.linkedItems[0].elements.urlSlug.value;
			const workflowStep = topic.system.workflowStep;

			switch (workflowStep) {
				case ARCHIVED:
					break;
				case ARCHIVED_2:
					break;
				case PUBLISHED:
					// Create a new version of the topic
					await apiClient
						.createNewVersionOfLanguageVariant()
						.byItemCodename(topic.system.codename)
						.byLanguageCodename("default")
						.toPromise();

					// Add a slug to it
					await apiClient
						.upsertLanguageVariant()
						.byItemCodename(topic.system.codename)
						.byLanguageCodename("default")
						.withData((builder) => [
							builder.textElement({
								element: {
									// Casting to any to avoid build errors due to outdated models
									codename: "url_slug_custom_value",
								},
								value: slug,
							}),
						])
						.toPromise();

					// Re-publish the new version
					await apiClient
						.publishLanguageVariant()
						.byItemCodename(topic.system.codename)
						.byLanguageCodename("default")
						.withoutData()
						.toPromise();
					break;
				default:
					await apiClient
						.upsertLanguageVariant()
						.byItemCodename(topic.system.codename)
						.byLanguageCodename("default")
						.withData((builder) => [
							builder.textElement({
								element: {
									// Casting to any to avoid build errors due to outdated models
									codename: "url_slug_custom_value",
								},
								value: slug,
							}),
						])
						.toPromise();
			}
		}
	} catch (error) {
		throw new Error(`Error in updateWebinarSlugs - ${error.message}`);
	}
};

export const updateEventSlugs = async (apiClient: ManagementClient) => {
	try {
		// Get all events with dates
		const eventsResponse = await KontentService.Instance()
			.deliveryClient.items<EventModel>()
			.type(contentTypes.event.codename)
			.notEmptyFilter(
				getElementsParamCodename(contentTypes.event.elements.dates.codename)
			)
			.toPromise();

		const events = eventsResponse.data.items;

		// Loop through the events and update the event slug with slug of the first date
		for (const event of events) {
			const slug = event.elements.dates.linkedItems[0].elements.urlSlug.value;
			const workflowStep = event.system.workflowStep;

			switch (workflowStep) {
				case ARCHIVED:
					break;
				case ARCHIVED_2:
					break;
				case PUBLISHED:
					// Create a new version of the event
					await apiClient
						.createNewVersionOfLanguageVariant()
						.byItemCodename(event.system.codename)
						.byLanguageCodename("default")
						.toPromise();

					// Add a slug to it
					await apiClient
						.upsertLanguageVariant()
						.byItemCodename(event.system.codename)
						.byLanguageCodename("default")
						.withData((builder) => [
							builder.textElement({
								element: {
									// Casting to any to avoid build errors due to outdated models
									codename: "url_slug_custom_value",
								},
								value: slug,
							}),
						])
						.toPromise();

					// Re-publish the new version
					await apiClient
						.publishLanguageVariant()
						.byItemCodename(event.system.codename)
						.byLanguageCodename("default")
						.withoutData()
						.toPromise();
					break;
				default:
					await apiClient
						.upsertLanguageVariant()
						.byItemCodename(event.system.codename)
						.byLanguageCodename("default")
						.withData((builder) => [
							builder.textElement({
								element: {
									// Casting to any to avoid build errors due to outdated models
									codename: "url_slug_custom_value",
								},
								value: slug,
							}),
						])
						.toPromise();
			}
		}
	} catch (error) {
		throw new Error(`Error in updateEventSlugs - ${error.message}`);
	}
};
