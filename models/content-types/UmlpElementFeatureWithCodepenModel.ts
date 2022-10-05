import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Feature with CodePen
 * Id: 16cbdbf5-f1bb-4904-9ac9-df74905bc4b3
 * Codename: umlp_element___feature_with_codepen
 */
export type UmlpElementFeatureWithCodepenModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: e8d76911-0864-45b3-baea-337e865bce68
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Lead Paragraph (rich_text)
   * Required: false
   * Id: ea78cb82-8dde-46d9-8997-d9baaaf8a608
   * Codename: lead_paragraph
   */
  leadParagraph: Elements.RichTextElement;

  /**
   * CodePen Embed HTML code (text)
   * Required: false
   * Id: 35ac2ddf-26bf-4c64-94d1-525b11f62d37
   * Codename: codepen_embed_html_code
   *
   * Insert HTML code for embedding without <script> tag (it's generated automatically). Change height to 400px in the HTML code.
   */
  codepenEmbedHtmlCode: Elements.TextElement;

  /**
   * Bottom text (rich_text)
   * Required: false
   * Id: 62eca794-8de8-411e-93dc-fd06beba9493
   * Codename: bottom_text
   */
  bottomText: Elements.RichTextElement;
}>;
