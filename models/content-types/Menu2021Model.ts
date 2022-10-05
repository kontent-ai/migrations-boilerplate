import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { MenuItemModel } from './MenuItemModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Menu 2021
 * Id: 527b2d29-e22a-4898-88a6-28899c59f4a5
 * Codename: menu_2021
 */
export type Menu2021Model = IContentItem<{
  /**
   * Items (modular_content)
   * Required: true
   * Id: ca5558fd-63e7-4a10-bb25-571832505a79
   * Codename: items
   */
  items: Elements.LinkedItemsElement<MenuItemModel>;

  /**
   * CTAs (modular_content)
   * Required: false
   * Id: 4d87b1a5-eeb3-428e-894f-023667edbbe6
   * Codename: ctas
   */
  ctas: Elements.LinkedItemsElement<SharedContentModel>;
}>;
