import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Integrations Design Block
 * Id: 625790da-9877-422b-90ea-9fce9afcb32d
 * Codename: integrations_design_block
 */
export type IntegrationsDesignBlockModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: 6b33157e-ea8f-4dce-8ab9-cfab6deedc74
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Image - Mobile (asset)
   * Required: false
   * Id: 5b75c75c-aa28-408c-88f1-e4ceabe084ed
   * Codename: image___mobile
   */
  imageMobile: Elements.AssetsElement;

  /**
   * Image - Tablet (asset)
   * Required: false
   * Id: fc93deda-f7cf-45b4-9eec-a1f300b6bc33
   * Codename: image___tablet
   */
  imageTablet: Elements.AssetsElement;

  /**
   * Image - Desktop (asset)
   * Required: false
   * Id: 5dd43fb3-befa-4e6b-aaf7-2c7ab8b23594
   * Codename: image___desktop
   */
  imageDesktop: Elements.AssetsElement;

  /**
   * Description (rich_text)
   * Required: false
   * Id: e9e5cb8c-0cd4-4f0b-9839-bde7f5ab51cc
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * CTA Title (text)
   * Required: false
   * Id: 8c9fb585-777c-499c-b1a2-aba165910af1
   * Codename: cta_title
   */
  ctaTitle: Elements.TextElement;
}>;