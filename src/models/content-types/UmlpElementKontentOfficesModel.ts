import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { OfficeModel } from './OfficeModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Kontent Offices
 * Id: 6d1ad99d-98f2-44a5-b4b6-12f1a6120027
 * Codename: umlp_element___kontent_offices
 */
export type UmlpElementKontentOfficesModel = IContentItem<{
  /**
   * Locations (modular_content)
   * Required: true
   * Id: a1cd8b96-088d-4a54-a0d0-7724b43df6f5
   * Codename: locations
   */
  locations: Elements.LinkedItemsElement<OfficeModel>;

  /**
   * Heading (text)
   * Required: true
   * Id: 301239b1-6867-4d7b-a156-de2d758fa877
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: 7fdd381a-d124-4369-a3a8-4524c187259d
   * Codename: text
   */
  text: Elements.RichTextElement;
}>;
