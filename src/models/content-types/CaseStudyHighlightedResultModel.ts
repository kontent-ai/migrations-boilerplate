import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Customer Success Story - Highlighted Result
 * Id: 155bdc27-bf28-4ee6-80f5-259f9d8e2a2d
 * Codename: case_study___highlighted_result
 */
export type CaseStudyHighlightedResultModel = IContentItem<{
  /**
   * Before Value Description (text)
   * Required: false
   * Id: 5e45cead-1526-4d7d-8942-87078146e646
   * Codename: before_value_description
   */
  beforeValueDescription: Elements.TextElement;

  /**
   * Value (text)
   * Required: false
   * Id: 3295521c-6909-ea61-d99a-a44ca6aa376e
   * Codename: value
   *
   * Number representing the result (absolute, percentage, ...)
   */
  value: Elements.TextElement;

  /**
   * Description (text)
   * Required: false
   * Id: 062a72b1-05ec-76cf-7d57-3cfe2d31a569
   * Codename: description
   *
   * Describes kind of value (increase in conversions, page views, ...)
   */
  description: Elements.TextElement;
}>;
