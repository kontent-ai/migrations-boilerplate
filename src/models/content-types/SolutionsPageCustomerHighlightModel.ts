import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { CaseStudyModel } from './CaseStudyModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Solutions Page - Customer Highlight
 * Id: 36a590c7-b0af-4ce2-8062-dd898e6dc452
 * Codename: solutions_page___customer_highlight
 */
export type SolutionsPageCustomerHighlightModel = IContentItem<{
  /**
   * Headline (text)
   * Required: false
   * Id: ba5743a0-9510-43d2-824f-86265bf9eb4d
   * Codename: headline
   */
  headline: Elements.TextElement;

  /**
   * Description (text)
   * Required: false
   * Id: f89b1235-01a4-4529-a1df-d0933199bf0d
   * Codename: description
   */
  description: Elements.TextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: c4874847-e792-4c3f-bad4-cf6e3192b871
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Case study (modular_content)
   * Required: false
   * Id: 66d8b0a4-b979-42a4-a94e-8cc842468c61
   * Codename: case_study
   */
  caseStudy: Elements.LinkedItemsElement<CaseStudyModel>;
}>;
