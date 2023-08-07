import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { PricingPageFaqModel } from './PricingPageFaqModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - FAQ
 * Id: 873ddfca-16ad-4a5c-a9d2-b993ced9f370
 * Codename: umlp_element___faq
 */
export type UmlpElementFaqModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: 317945dc-2c12-4b52-ace0-245dbaaf6072
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * FAQs (modular_content)
   * Required: true
   * Id: ea70d03c-9137-477b-8a0c-75a8492c04f9
   * Codename: faqs
   */
  faqs: Elements.LinkedItemsElement<PricingPageFaqModel>;
}>;