import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Consent element
 * Id: 07c93627-6240-4a6a-aa02-5122066e5c36
 * Codename: consent_element
 */
export type ConsentElementModel = IContentItem<{
  /**
   * Display name (text)
   * Required: false
   * Id: f710ebf3-a5e9-4f6f-8b4f-10766878dcf4
   * Codename: display_name
   */
  displayName: Elements.TextElement;

  /**
   * Code name (text)
   * Required: false
   * Id: ad944a1e-67f8-4fb5-92cd-2f41afc73000
   * Codename: code_name
   *
   * Code name should be exactly the same as code name of related consent on k.com side!
   */
  codeName: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: c9d5f297-4e1d-4532-ae67-4739bccc36bc
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Alternative Text (rich_text)
   * Required: false
   * Id: a08cd92f-16d1-4132-847c-013b847b2ae1
   * Codename: alternative_text
   */
  alternativeText: Elements.RichTextElement;
}>;