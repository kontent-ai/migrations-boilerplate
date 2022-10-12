import { ManagementClient } from "@kontent-ai/management-sdk";
import { contentTypes } from "../models";

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
						name: "URL Slug",
						type: "url_slug",
						depends_on: {
							element: {
								codename: contentTypes.webinar_topic.elements.title.codename,
							},
						},
						is_required: true,
						guidelines: "URL slug for this webinar (e.g. /horizons-2022)",
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
			]);
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
			]);
	} catch (error) {
		throw new Error(`Error in updateWebinarDateContentType - ${error.message}`);
	}
};
