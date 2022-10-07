import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { CountryModel } from './CountryModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Country and State
 * Id: cea1d3f8-ad90-4523-84bb-dea1117166ab
 * Codename: country_and_state
 */
export type CountryAndStateModel = IContentItem<{
  /**
   * Country (modular_content)
   * Required: true
   * Id: 21ddf339-8d5c-f6f1-98f0-5c5e361e4cb3
   * Codename: country
   *
   * Country this state belongs to
   */
  country: Elements.LinkedItemsElement<CountryModel>;

  /**
   * State Name (text)
   * Required: false
   * Id: 3b19cdc8-b65e-476f-ca5c-4258c23a5d62
   * Codename: state_name
   *
   * Name of state
   */
  stateName: Elements.TextElement;
}>;