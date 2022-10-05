import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Achievement
 * Id: 94c0ed3f-9e04-4499-b96f-fc600bcf4033
 * Codename: achievement
 */
export type AchievementModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: a9626d2e-2a8c-4eb3-9e76-80a01eedc06f
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Description (rich_text)
   * Required: true
   * Id: e421f775-956c-4fff-a33d-9d47b49a3bb0
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Logo (asset)
   * Required: true
   * Id: 5f73f2ac-ea77-4c66-b501-6a8fe03e26bf
   * Codename: logo
   */
  logo: Elements.AssetsElement;

  /**
   * Type (multiple_choice)
   * Required: true
   * Id: 88595097-bb08-4484-8425-c6b674419eac
   * Codename: type
   */
  type: Elements.MultipleChoiceElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: c3823cb2-ac86-4293-8316-5361d644cde8
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: a5d64c25-e57d-44b9-8add-f8177334916d
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;

  /**
   * Anchor Id (url_slug)
   * Required: false
   * Id: 92303b48-65e5-4d35-a1f3-cf19166c7734
   * Codename: anchor_id
   */
  anchorId: Elements.UrlSlugElement;
}>;
