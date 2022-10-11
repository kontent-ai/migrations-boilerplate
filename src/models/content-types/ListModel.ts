import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ListItemModel } from './ListItemModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * List
 * Id: 544d2f15-a301-4ede-a70c-82fd19128170
 * Codename: list
 */
export type ListModel = IContentItem<{
  /**
   * List Items (modular_content)
   * Required: false
   * Id: f5a23b35-d9e0-4765-901d-3a64f30594f1
   * Codename: list_items
   */
  listItems: Elements.LinkedItemsElement<ListItemModel>;
}>;
