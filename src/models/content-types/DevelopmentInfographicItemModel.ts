import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Development Infographic Item
 * Id: ad276046-3227-4638-b5fc-9fd240f70aa3
 * Codename: development_infographic_item
 */
export type DevelopmentInfographicItemModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: 89e21fbc-b46e-4d50-ab0c-3e5f5a2e008c
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: ac65e511-ce72-412f-aedb-841667e05a55
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: true
   * Id: b59dd921-a48b-4fdc-988d-3185632accc4
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Icon (asset)
   * Required: true
   * Id: 31d46f14-a908-4e54-9536-1c1a2c1ad051
   * Codename: icon
   */
  icon: Elements.AssetsElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: a9d2e7a3-f39a-4883-9a5a-ca50258f9361
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}>;
