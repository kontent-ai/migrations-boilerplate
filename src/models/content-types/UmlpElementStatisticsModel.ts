import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ContentBoxModel } from './ContentBoxModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Statistics
 * Id: 19e32401-efca-4ef4-bcec-3c1e37236a73
 * Codename: umlp_element___statistics
 */
export type UmlpElementStatisticsModel = IContentItem<{
  /**
   * Statistics (modular_content)
   * Required: false
   * Id: 926f0710-389c-4c2f-a884-17eb4884f2f3
   * Codename: statistics
   */
  statistics: Elements.LinkedItemsElement<ContentBoxModel>;
}>;