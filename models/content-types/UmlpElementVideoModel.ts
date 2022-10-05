import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Video
 * Id: 8b023508-b1ba-4bf8-a775-359cb04b0a0d
 * Codename: umlp_element___video
 */
export type UmlpElementVideoModel = IContentItem<{
  /**
   * Video Type (multiple_choice)
   * Required: true
   * Id: 758c8148-0bf5-499e-85d8-88daf9de3097
   * Codename: video_type
   */
  videoType: Elements.MultipleChoiceElement;

  /**
   * Video Title (text)
   * Required: false
   * Id: 0725a871-b7d4-4dc4-bb9f-3f3b1f7a8d11
   * Codename: video_title
   */
  videoTitle: Elements.TextElement;
}>;
