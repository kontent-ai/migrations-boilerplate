import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { PersonModel } from './PersonModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Person list
 * Id: 5de19c31-34dc-4a12-af4c-28229f3d1515
 * Codename: umlp_element___person_list
 */
export type UmlpElementPersonListModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: b3115947-7624-4d84-af29-2987f05ccae9
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * People (modular_content)
   * Required: true
   * Id: d3546efc-28ad-4344-9af4-099904faaca6
   * Codename: people
   */
  people: Elements.LinkedItemsElement<PersonModel>;
}>;
