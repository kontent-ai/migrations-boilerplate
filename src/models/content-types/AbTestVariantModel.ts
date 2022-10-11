import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { UMLPContent } from '../content-type-snippets/umlp_content';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * AB test variant
 * Id: 5ab5ff61-c188-417f-9037-bb46ec955a53
 * Codename: ab_test_variant
 */
export type AbTestVariantModel = IContentItem<{
  /**
   * ID (text)
   * Required: true
   * Id: b9f10e39-909b-4fce-a27b-7e99aa837be9
   * Codename: variant_id
   */
  variantId: Elements.TextElement;

  /**
   * Weight (number)
   * Required: true
   * Id: a3d677d9-2e96-4ec1-96ff-9c8250a16b9c
   * Codename: weight
   *
   * Only values 1-99 are supported. The tested page weight is calculated automatically as a complement to 100. If subtotal of all variants' weights is over 99, the page will render an error.
   */
  weight: Elements.NumberElement;
}> &
  UMLPContent;
