import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { DevelopmentFeatureKkModel } from './DevelopmentFeatureKkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Support Verbose Feature
 * Id: 06e67da9-f434-412f-b5f0-5644a80ec1b6
 * Codename: umlp_element___support_verbose_feature
 */
export type UmlpElementSupportVerboseFeatureModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: b17e0e27-d215-4f65-ae15-28c01bef7f26
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Items (modular_content)
   * Required: false
   * Id: 4ac5357f-781b-4837-96ff-2611f50d1ebd
   * Codename: items
   */
  items: Elements.LinkedItemsElement<DevelopmentFeatureKkModel>;
}>;
