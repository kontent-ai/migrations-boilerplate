import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Metadata } from '../content-type-snippets/metadata';
import { Hero } from '../content-type-snippets/hero';
import { ConsentElementModel } from './ConsentElementModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Request Demo page
 * Id: 04e4351c-6654-4585-b820-bdf4eb2b6a6f
 * Codename: request_demo_page
 */
export type RequestDemoPageModel = IContentItem<{
  /**
   * Hero Additional Info (rich_text)
   * Required: false
   * Id: 6be6dec9-f41f-4553-9052-053641e1d16d
   * Codename: hero_additional_info
   */
  heroAdditionalInfo: Elements.RichTextElement;

  /**
   * Form title (text)
   * Required: false
   * Id: 321d1a3b-c18f-4ab1-836f-25deecad9175
   * Codename: form_title
   */
  formTitle: Elements.TextElement;

  /**
   * Form intro (text)
   * Required: false
   * Id: e01004c7-39bf-12b3-962c-c27f3e6a243a
   * Codename: form_intro
   */
  formIntro: Elements.TextElement;

  /**
   * Subscribe to newsletter (text)
   * Required: false
   * Id: 8ed2b031-96f8-e277-1f37-063b413ed599
   * Codename: subscribe_to_newsletter
   */
  subscribeToNewsletter: Elements.TextElement;

  /**
   * Submit button text (text)
   * Required: false
   * Id: b52283e0-13b5-09b5-8a50-5e2533360271
   * Codename: submit_button_text
   */
  submitButtonText: Elements.TextElement;

  /**
   * Form outro (text)
   * Required: false
   * Id: e4e6c955-cfa7-d83a-3540-5aa49a910a9e
   * Codename: form_outro
   */
  formOutro: Elements.TextElement;

  /**
   * Thank you title (text)
   * Required: false
   * Id: 132965a3-ba4f-5a76-9329-a3d0c993d5e8
   * Codename: thank_you_title
   */
  thankYouTitle: Elements.TextElement;

  /**
   * Thank you message (rich_text)
   * Required: false
   * Id: 0f81a686-1f9c-bc78-e99e-afd3f49e45ce
   * Codename: thank_you_message
   */
  thankYouMessage: Elements.RichTextElement;

  /**
   * Thank you message alternative (rich_text)
   * Required: false
   * Id: 4e7cd56c-d9b3-4920-9537-610d4e4e699d
   * Codename: thank_you_message_alternative
   */
  thankYouMessageAlternative: Elements.RichTextElement;

  /**
   * Consent elements (modular_content)
   * Required: false
   * Id: cde5fb7f-8430-46f8-8f5f-45d01418e0d2
   * Codename: consent_elements
   */
  consentElements: Elements.LinkedItemsElement<ConsentElementModel>;

  /**
   * Form next step info (rich_text)
   * Required: false
   * Id: 725f5030-668f-43d0-92a1-be095333f7c3
   * Codename: form_next_step_info
   */
  formNextStepInfo: Elements.RichTextElement;

  /**
   * Demo testimonial (modular_content)
   * Required: false
   * Id: e356935c-6580-4575-a705-f039b58046d5
   * Codename: demo_testimonial
   */
  demoTestimonial: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Title (text)
   * Required: false
   * Id: 2bc80f53-18eb-a2e8-dbac-d1e6b03f25ba
   * Codename: title
   *
   * !Obsolete!
   */
  title: Elements.TextElement;

  /**
   * Partner title (text)
   * Required: false
   * Id: 357b7330-c7a6-43d6-b9b9-0f0b1c8739fc
   * Codename: partner_title
   */
  partnerTitle: Elements.TextElement;

  /**
   * Partner perex (rich_text)
   * Required: false
   * Id: 1fdd9474-4090-4c7a-afbc-43149da05cc8
   * Codename: partner_perex
   */
  partnerPerex: Elements.RichTextElement;

  /**
   * Partner form title (text)
   * Required: false
   * Id: e11da8e4-dd8e-4d58-aea9-b33ac9b46b1e
   * Codename: partner_form_title
   */
  partnerFormTitle: Elements.TextElement;

  /**
   * Partner testimonial (modular_content)
   * Required: false
   * Id: ec2b4801-2232-4fe9-836c-c00866eb193f
   * Codename: partner_testimonial
   */
  partnerTestimonial: Elements.LinkedItemsElement<RichTestimonialModel>;
}> &
  Metadata &
  Hero &
  SitemapMetadata;
