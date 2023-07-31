import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Newsletter section
 * Id: b7f65557-599a-49ac-809b-7603c86daa86
 * Codename: newsletter_section
 */
export type NewsletterSectionModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: a1f129f1-e97a-4393-9dec-13ed08323d19
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (text)
   * Required: true
   * Id: 7fd0ac7b-bfa1-4af6-8b09-96b8127093ac
   * Codename: text
   */
  text: Elements.TextElement;

  /**
   * Thank you message (text)
   * Required: true
   * Id: 0fc669ae-60d6-44aa-8b0a-cab8b60d432b
   * Codename: thank_you_message
   */
  thankYouMessage: Elements.TextElement;

  /**
   * Pardot tracker (text)
   * Required: true
   * Id: fbd8eddc-f328-4910-90b0-c83e925f80aa
   * Codename: pardot_tracker
   */
  pardotTracker: Elements.TextElement;
}>;
