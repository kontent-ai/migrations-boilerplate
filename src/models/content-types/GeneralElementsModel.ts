import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { LogoModel } from './LogoModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * General Elements
 * Id: 12e46216-5a29-43cc-98b6-94dc6755c8c5
 * Codename: general_elements
 */
export type GeneralElementsModel = IContentItem<{
  /**
   * Logos (modular_content)
   * Required: false
   * Id: 516f17f6-b784-4294-9d5f-abfdff423237
   * Codename: logos
   */
  logos: Elements.LinkedItemsElement<LogoModel>;
}>;
