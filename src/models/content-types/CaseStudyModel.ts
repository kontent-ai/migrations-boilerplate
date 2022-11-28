import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { UmlpElementFullWidthImageModel } from './UmlpElementFullWidthImageModel';
import { CaseStudyHighlightedResultModel } from './CaseStudyHighlightedResultModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { UmlpElementSelectedCustomerSuccessStoriesModel } from './UmlpElementSelectedCustomerSuccessStoriesModel';
import { PartnerModel } from './PartnerModel';
import { ReleaseProjects } from '../taxonomies/release_projects';
import { Regions } from '../taxonomies/regions';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';
import { TestimonialModel } from './TestimonialModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Customer Success Story
 * Id: 1eb99c10-17e2-4062-874e-f50d97162a3d
 * Codename: case_study
 */
export type CaseStudyModel = IContentItem<{
  /**
   * Header image (asset)
   * Required: true
   * Id: 5b627bba-78f4-15ea-3383-2fb7f372d46e
   * Codename: header_image
   *
   * Image displayed at top of the page1920 x 680px
   */
  headerImage: Elements.AssetsElement;

  /**
   * Logo (asset)
   * Required: true
   * Id: c2473bad-f86c-4962-a570-d0b4974826c3
   * Codename: logo
   */
  logo: Elements.AssetsElement;

  /**
   * Website URL (text)
   * Required: true
   * Id: 065db596-54e3-edaf-bc29-05db87b6c6b9
   * Codename: website_url
   *
   * URL of website including protocol http:// or https://
   */
  websiteUrl: Elements.TextElement;

  /**
   * Project URL (text)
   * Required: false
   * Id: 9c570ab8-c73e-4025-82c1-2915a09dff24
   * Codename: project_url
   *
   * URL for a project built with Kontent.ai. Used for customer with no customer success story.
   */
  projectUrl: Elements.TextElement;

  /**
   * Project Image (modular_content)
   * Required: false
   * Id: 8c6c9491-b0e0-4b85-9100-8db8ead769ec
   * Codename: project_image
   */
  projectImage: Elements.LinkedItemsElement<UmlpElementFullWidthImageModel>;

  /**
   * Customer Overview mode (multiple_choice)
   * Required: true
   * Id: 3fddd235-88a5-4212-9316-1d2bbcd34baf
   * Codename: direct_to_the_website_url
   *
   * No - Full blown customer story filled out. Yes - No story yet, basic information about the customer and project.
   */
  directToTheWebsiteUrl: Elements.MultipleChoiceElement;

  /**
   * Title Full (rich_text)
   * Required: true
   * Id: 92af41ff-4073-41e2-82ac-aa0978e00574
   * Codename: title_full
   *
   * Title/Main heading used in detail page (max. 120 characters). Add a period to the end and mark it bold.
   */
  titleFull: Elements.RichTextElement;

  /**
   * Title Short (text)
   * Required: true
   * Id: 0743618d-f794-3251-40e9-cda5f310f5b1
   * Codename: title
   *
   * Used e.g. in listing page.
   */
  title: Elements.TextElement;

  /**
   * Card image text (text)
   * Required: false
   * Id: 9d53ff93-79b4-4109-897d-ae2287b7e449
   * Codename: card_image_text
   *
   * Optional card image text strip (max. 120 characters)
   */
  cardImageText: Elements.TextElement;

  /**
   * Goal (rich_text)
   * Required: true
   * Id: 1dae0907-02b3-ea79-19da-f799d8537a86
   * Codename: goal
   *
   * Goal or reason of case study. Used as perex. Max 400 characters. Mark the first sentence as an H2 and make the first period bold.
   */
  goal: Elements.RichTextElement;

  /**
   * Challenges box (rich_text)
   * Required: false
   * Id: c85fbbe0-2f28-46c3-954b-c7923d3109ab
   * Codename: challenges_box
   */
  challengesBox: Elements.RichTextElement;

  /**
   * Solutions box (rich_text)
   * Required: false
   * Id: 54cf3800-bc14-41d1-885d-39dd8243c637
   * Codename: solutions_box
   */
  solutionsBox: Elements.RichTextElement;

  /**
   * Results box (rich_text)
   * Required: false
   * Id: eed7a735-fedd-473c-9247-1a3d5ef4e9c2
   * Codename: results_box
   */
  resultsBox: Elements.RichTextElement;

  /**
   * Body (rich_text)
   * Required: false
   * Id: de35bfd2-a68f-4336-8501-24f1396dd3e7
   * Codename: body
   *
   * Body of the case study
   */
  body: Elements.RichTextElement;

  /**
   * Highlighted results (modular_content)
   * Required: false
   * Id: 078b0ae3-c956-435f-49f1-05138a5f3216
   * Codename: highlighted_results
   *
   * Select 1 or more items of type "Highlighted Results"
   */
  highlightedResults: Elements.LinkedItemsElement<CaseStudyHighlightedResultModel>;

  /**
   * Highlighted results - After Solution (modular_content)
   * Required: false
   * Id: 7b72b436-c9d5-4cca-b366-3617b6537472
   * Codename: highlighted_results___after_solution
   */
  highlightedResultsAfterSolution: Elements.LinkedItemsElement<CaseStudyHighlightedResultModel>;

  /**
   * Rich Testimonial (modular_content)
   * Required: false
   * Id: 3a5a30db-5073-4cf5-8856-0d07ea7ee99d
   * Codename: rich_testimonial
   *
   * Select 1 item
   */
  richTestimonial: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Other success stories (modular_content)
   * Required: false
   * Id: adcdd64d-31da-473a-9dfd-8e79b7e81a96
   * Codename: other_success_stories
   */
  otherSuccessStories: Elements.LinkedItemsElement<UmlpElementSelectedCustomerSuccessStoriesModel>;

  /**
   * Project Category (multiple_choice)
   * Required: false
   * Id: c9e4681e-0ba9-4c12-bbe0-3dfd55336760
   * Codename: project_category
   *
   * aka "Use case"
   */
  projectCategory: Elements.MultipleChoiceElement;

  /**
   * Industry (multiple_choice)
   * Required: false
   * Id: fede3000-7d1e-4025-9545-b8741f8a865f
   * Codename: industry
   */
  industry: Elements.MultipleChoiceElement;

  /**
   * Implemented by (text)
   * Required: false
   * Id: 48b6a90a-5bf0-e7f9-9812-6905a3ebff45
   * Codename: implemented_by
   *
   * Name of company who implemented the web site (used in listing page)
   */
  implementedBy: Elements.TextElement;

  /**
   * Implemented By (modular_content)
   * Required: false
   * Id: 9f792d46-63c6-4159-ad37-762061b61ee4
   * Codename: implemented_by_2
   */
  implementedBy2: Elements.LinkedItemsElement<PartnerModel>;

  /**
   * Publish date (date_time)
   * Required: false
   * Id: 3c7c2fed-a6c1-5cc8-de53-79a84292ae0d
   * Codename: publish_date
   *
   * Date when page is published on our web site.  Used for ordering in case studies listing.
   */
  publishDate: Elements.DateTimeElement;

  /**
   * Metadata - title (text)
   * Required: false
   * Id: 86c853b8-d6cc-4fe2-d9f0-42def6b0d195
   * Codename: metadata___title
   *
   * Format: Customer name - Customer Success Story & Review
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata - description (text)
   * Required: false
   * Id: d0746072-967f-4588-3572-0ea2307cc8dd
   * Codename: metadata___description
   *
   * 2 sentences: a brief description of what was achieved, and "Read the customer success story".
   */
  metadataDescription: Elements.TextElement;

  /**
   * URL slug (url_slug)
   * Required: false
   * Id: bc99c17f-19eb-7f23-08dd-c6ce9e999ca1
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: d5992346-c05e-4a7d-9bdc-e7a4a6733f41
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;

  /**
   * Region (taxonomy)
   * Required: false
   * Id: b6a6c36e-bf2f-44ff-a5a9-6e7fd19a6e0f
   * Codename: region
   */
  region: Elements.TaxonomyElement<Regions>;

  /**
   * Type (text)
   * Required: false
   * Id: 8cf66119-d411-4aed-b673-ff2447648e15
   * Codename: type
   *
   * Orange text on the case study card. Defaults to "Case Study"
   */
  type: Elements.TextElement;

  /**
   * Omit from Customer highlights page (multiple_choice)
   * Required: false
   * Id: ecff3b68-4c74-43bb-9a66-6cbbc733ba69
   * Codename: omit_from_customers
   *
   * When checked the case study/project will be omitted from /customers page. Otherwise it will be present
   */
  omitFromCustomers: Elements.MultipleChoiceElement;

  /**
   * Opengraph Image (asset)
   * Required: false
   * Id: b6c9c606-30c7-4de8-bec6-627c3f401788
   * Codename: opengraph_image
   *
   * Ideally 1200px wide
   */
  opengraphImage: Elements.AssetsElement;

  /**
   * Social Media Text (rich_text)
   * Required: false
   * Id: 50c35f41-3ee4-988d-e290-fa070b03a744
   * Codename: social_media_text
   *
   * For manual processing only - not used on the website
   */
  socialMediaText: Elements.RichTextElement;

  /**
   * Social Media Banner Copy (rich_text)
   * Required: false
   * Id: 0893db6c-40b1-b56b-2321-d83559adf10f
   * Codename: social_media_banner_copy
   *
   * For manual processing only - not used on the website
   */
  socialMediaBannerCopy: Elements.RichTextElement;

  /**
   * Social Media Banners (asset)
   * Required: false
   * Id: 976c80dd-2925-9d3e-406d-5d9efbc75e49
   * Codename: social_media_banners
   *
   * For manual processing only - not used on the website
   */
  socialMediaBanners: Elements.AssetsElement;

  /**
   * Social Media Channels (multiple_choice)
   * Required: false
   * Id: 5beeb939-a627-4805-0fd4-d37e1987e4dd
   * Codename: social_media_channels
   *
   * For manual processing only - not used on the website
   */
  socialMediaChannels: Elements.MultipleChoiceElement;

  /**
   * Year of implementation (text)
   * Required: false
   * Id: d1bef5d5-3e08-5875-6176-022145c57446
   * Codename: year_of_implementation
   *
   * !OBSOLETE!  Date when case study was implemented - specified as string (only temporary, will be removed and replaced by 'Implemented Date' in few days)
   */
  yearOfImplementation: Elements.TextElement;

  /**
   * Introduction (text)
   * Required: false
   * Id: 1e94341a-0cac-4554-b1a7-469ad93b1e4b
   * Codename: introduction
   *
   * !OBSOLETE!  - can be still used by old items, but for new items use "Title full" field instead
   */
  introduction: Elements.TextElement;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: bebf8af9-9003-6143-bf52-57d5af36a2fd
   * Codename: testimonial
   *
   * !OBSOLETE! - use "Rich Testimonial" field for new case studies
   */
  testimonial: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * Technology Stack (multiple_choice)
   * Required: false
   * Id: c363c209-89a3-4de5-8c8b-6ddfbbe139f1
   * Codename: technology_stack
   *
   * !OBSOLETE!
   */
  technologyStack: Elements.MultipleChoiceElement;

  /**
   * Mobile App Title (text)
   * Required: false
   * Id: 299e2aad-a1a6-493e-a3f7-085c36f0393c
   * Codename: mobile_app_title
   *
   * !OBSOLETE! Title of link to mobile app
   */
  mobileAppTitle: Elements.TextElement;

  /**
   * Mobile App URL (text)
   * Required: false
   * Id: 1ba55bb8-1ca2-439d-aa10-56df9b477f92
   * Codename: mobile_app_url
   *
   * !OBSOLETE! URL where related mobile app can be downloaded (including protocol http:// or https://)
   */
  mobileAppUrl: Elements.TextElement;

  /**
   * Header image text (text)
   * Required: false
   * Id: 8f94d42b-0f2c-4da7-b443-a594f0070289
   * Codename: header_image_text
   *
   * !OBSOLETE! Alt text for header image
   */
  headerImageText: Elements.TextElement;

  /**
   * Partner page (modular_content)
   * Required: false
   * Id: bec34fdd-bf1e-ee6a-8b4c-30ef7d54bea2
   * Codename: partner_page
   *
   * !OBSOLETE!  Choose the Partner content item of partner who implemented the case study. Unless there is a Partner page for the author, fill in the Implemented by field below.
   */
  partnerPage: Elements.LinkedItemsElement<PartnerModel>;

  /**
   * Implemented Date (date_time)
   * Required: false
   * Id: b00fc49d-260a-df98-5d72-dccf6cbe5a8e
   * Codename: implemented_date
   *
   * !OBSOLETE! Date when case study was implemented. You can enter 1st day of month if you don't know exact day, there is only month and year part used.
   */
  implementedDate: Elements.DateTimeElement;

  /**
   * Client information (rich_text)
   * Required: false
   * Id: 8672099b-3097-d3d6-ced9-a86ec847ce79
   * Codename: client_information
   *
   * !OBSOLETE!  Information/Data about client. Don't use "bold" for title/client's name, just h4
   */
  clientInformation: Elements.RichTextElement;

  /**
   * Project information (rich_text)
   * Required: false
   * Id: 65f982b5-7473-d926-8674-46f40bcb1a0d
   * Codename: project_information
   *
   * !OBSOLETE!  Information about project.  Max 500 characters.
   */
  projectInformation: Elements.RichTextElement;

  /**
   * Results lead paragraph (rich_text)
   * Required: false
   * Id: 4d175b82-20ea-2bf9-1a23-b868aec7ea70
   * Codename: results_lead_paragraph
   *
   * !OBSOLETE!  Results lead paragraph.  Max 200 characters
   */
  resultsLeadParagraph: Elements.RichTextElement;

  /**
   * Results classic paragraph (rich_text)
   * Required: false
   * Id: 1b102570-2003-5f2e-4b34-a579bdd8989f
   * Codename: results_classic_paragraph
   *
   * !OBSOLETE!  Results classic paragraph. Max 300 characters
   */
  resultsClassicParagraph: Elements.RichTextElement;

  /**
   * Screenshots (asset)
   * Required: false
   * Id: 4be7cf4d-420d-03e7-ded4-d22d59b4f87d
   * Codename: screenshots
   *
   * !OBSOLETE!
   */
  screenshots: Elements.AssetsElement;

  /**
   * Text 1 (text)
   * Required: false
   * Id: c236bd3f-0130-45f4-9d36-25ef83aba083
   * Codename: text_1
   *
   * Lead green text (1 word, percentage, number)
   */
  text1: Elements.TextElement;

  /**
   * Text 2 (text)
   * Required: false
   * Id: 8df6277f-a807-4b38-b077-12234557dfc9
   * Codename: text_2
   *
   * Line below (1 - 5 words)
   */
  text2: Elements.TextElement;
}> &
  SitemapMetadata;
