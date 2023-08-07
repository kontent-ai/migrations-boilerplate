import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Customer success details page
 * Id: 1f30bd47-595e-4e75-a91d-c58fd3cbf1a5
 * Codename: case_study_detail_page
 */
export type CaseStudyDetailPageModel = IContentItem<{
  /**
   * Summary title (rich_text)
   * Required: false
   * Id: 04f503ee-40e3-4c2e-a1a4-ade19f7e9100
   * Codename: summary_title
   */
  summaryTitle: Elements.RichTextElement;

  /**
   * Challenges box title (text)
   * Required: false
   * Id: 11e579c2-758e-4338-80f5-649884bbb73d
   * Codename: challenges_box_title
   */
  challengesBoxTitle: Elements.TextElement;

  /**
   * Challenges box image (asset)
   * Required: false
   * Id: 2f1058a6-88e2-4360-ad1c-7e0fbf99928e
   * Codename: challenges_box_image
   */
  challengesBoxImage: Elements.AssetsElement;

  /**
   * Solutions box title (text)
   * Required: false
   * Id: e44ef97a-6a9e-40e6-8f65-894a1b8c04bc
   * Codename: solutions_box_title
   */
  solutionsBoxTitle: Elements.TextElement;

  /**
   * Solutions box image (asset)
   * Required: false
   * Id: 06a02f35-b8f8-4e1b-8eae-378c633523d7
   * Codename: solutions_box_image
   */
  solutionsBoxImage: Elements.AssetsElement;

  /**
   * Results box title (text)
   * Required: false
   * Id: 2c665929-60dd-4003-813b-5f5efcca4b21
   * Codename: results_box_title
   */
  resultsBoxTitle: Elements.TextElement;

  /**
   * Results box image (asset)
   * Required: false
   * Id: 0e0e67b1-7918-42ad-a7a5-30fc922a4e7f
   * Codename: results_box_image
   */
  resultsBoxImage: Elements.AssetsElement;

  /**
   * Background title (text)
   * Required: false
   * Id: 471a3972-35fb-4d89-a596-8bb6d73a3287
   * Codename: background_title
   */
  backgroundTitle: Elements.TextElement;

  /**
   * First section title (text)
   * Required: false
   * Id: 4555e7e1-cd39-442d-8465-14059803b5ab
   * Codename: first_section_title
   */
  firstSectionTitle: Elements.TextElement;

  /**
   * Second section title (text)
   * Required: false
   * Id: f63b8097-2649-43cc-a789-091d3829820e
   * Codename: second_section_title
   */
  secondSectionTitle: Elements.TextElement;

  /**
   * Results title (text)
   * Required: false
   * Id: 2ec2105c-148b-4178-a88d-e2fa35386751
   * Codename: results_title
   */
  resultsTitle: Elements.TextElement;

  /**
   * Related Case Studies title (rich_text)
   * Required: false
   * Id: a871cb86-01d5-4f34-9630-1636af5ed402
   * Codename: related_case_studies_title
   */
  relatedCaseStudiesTitle: Elements.RichTextElement;

  /**
   * Website title (text)
   * Required: false
   * Id: 2dd91296-a912-48c4-b6d3-e8d6d03bbb50
   * Codename: website_title
   */
  websiteTitle: Elements.TextElement;

  /**
   * Mobile app title (text)
   * Required: false
   * Id: 225630d7-057a-4d81-aff6-46fc8bb0238d
   * Codename: mobile_app_title
   */
  mobileAppTitle: Elements.TextElement;

  /**
   * Technology stack title (text)
   * Required: false
   * Id: 68bca1d0-aa98-4a7f-80ab-7a240160fb5e
   * Codename: technology_stack_title
   */
  technologyStackTitle: Elements.TextElement;

  /**
   * Use case title (text)
   * Required: false
   * Id: ad5fdfe4-34bc-4904-be8a-078fd03801f5
   * Codename: use_case_title
   */
  useCaseTitle: Elements.TextElement;

  /**
   * Industry title (text)
   * Required: false
   * Id: 102e5d98-8872-4713-866e-f2c3890d0a2b
   * Codename: industry_title
   */
  industryTitle: Elements.TextElement;

  /**
   * Additional info - title (text)
   * Required: false
   * Id: 4d344eea-c2e8-4cdf-be0c-58b77f92b489
   * Codename: additional_info___title
   */
  additionalInfoTitle: Elements.TextElement;

  /**
   * Additional info - CTA (modular_content)
   * Required: false
   * Id: 3aa7973c-63bc-44a9-b0f1-168669c3d760
   * Codename: additional_info___cta
   */
  additionalInfoCta: Elements.LinkedItemsElement<SharedContentModel>;
}> &
  SitemapMetadata;