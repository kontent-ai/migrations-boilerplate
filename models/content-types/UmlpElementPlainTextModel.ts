import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Plain text
 * Id: 3a4a3f0c-275d-4b9c-b218-1f9fbbf861f0
 * Codename: umlp_element___plain_text
 */
export type UmlpElementPlainTextModel = IContentItem<{
  /**
   * Content (rich_text)
   * Required: true
   * Id: ecfb1cb4-1968-495a-af52-0b289ec3687b
   * Codename: content
   *
   * Use this component for simple text-heavy pages (e.g. cookie policy, GDPR etc.)
   */
  content: Elements.RichTextElement;
}>;
