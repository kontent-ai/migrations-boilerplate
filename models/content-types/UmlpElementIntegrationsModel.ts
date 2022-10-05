import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { IntegrationModel } from './IntegrationModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Integrations
 * Id: 158e280f-cba2-4610-8fae-5a7f9759f699
 * Codename: umlp_element___integrations
 */
export type UmlpElementIntegrationsModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: c10f6c35-4b7e-4f6d-b606-8bfb4bf67ce5
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Lead Paragraph (rich_text)
   * Required: false
   * Id: 6225cc74-e03a-47b0-b42c-f51cede210ea
   * Codename: lead_paragraph
   */
  leadParagraph: Elements.RichTextElement;

  /**
   * List (modular_content)
   * Required: false
   * Id: 17be8670-3875-4a24-a901-e4279cf3478a
   * Codename: list
   */
  list: Elements.LinkedItemsElement<IntegrationModel>;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: 91681021-336f-44df-a98f-61daf5cb1b91
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;
}>;
