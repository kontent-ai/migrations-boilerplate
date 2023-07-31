import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Solutions Page - CTA
 * Id: e8ac6c06-f59f-44c6-ba2b-448dedaf1133
 * Codename: solutions_page___cta
 */
export type SolutionsPageCtaModel = IContentItem<{
  /**
   * Headline (text)
   * Required: false
   * Id: 6e7a4030-cc8d-4dae-ba31-b8578e974159
   * Codename: headline
   */
  headline: Elements.TextElement;

  /**
   * Description (text)
   * Required: false
   * Id: edc52ce5-e1b1-4dfe-8ce3-c0fd59ddae1b
   * Codename: description
   */
  description: Elements.TextElement;

  /**
   * CTA (text)
   * Required: false
   * Id: 4360bb72-b772-4453-961d-2d2800b18a56
   * Codename: cta
   */
  cta: Elements.TextElement;
}>;