import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ResourceModel } from './ResourceModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Resource Cards Section
 * Id: 3b555248-dafe-4fca-82ed-3f3a5b1bd048
 * Codename: umlp_element___resource_cards_section
 */
export type UmlpElementResourceCardsSectionModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: d6b4a93b-c79f-4097-83b4-6525ff427475
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: fbb4169c-dfb3-4ea7-9b49-46cae8c95cf7
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Resources (modular_content)
   * Required: true
   * Id: b7447b99-c10d-4d4a-affc-d0a29e6da3de
   * Codename: resources
   */
  resources: Elements.LinkedItemsElement<ResourceModel>;
}>;
