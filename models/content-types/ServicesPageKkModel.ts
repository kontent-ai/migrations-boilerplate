import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { ServicesPremiumPlanModel } from './ServicesPremiumPlanModel';
import { TestimonialModel } from './TestimonialModel';
import { ServicesServiceModel } from './ServicesServiceModel';
import { SolutionsPageProductCapabilityModel } from './SolutionsPageProductCapabilityModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { PricingPageFaqCategoryModel } from './PricingPageFaqCategoryModel';
import { Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Services Page KK
 * Id: 54398924-668d-4988-9242-be4d2b241eb2
 * Codename: services_page_kk
 */
export type ServicesPageKkModel = IContentItem<{
  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 3c217a34-0da6-45c4-835f-24603f8b2e09
   * Codename: cta_button
   */
  ctaButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: df60b3ff-f751-4d74-9d24-e38d372d0d77
   * Codename: heading_premium
   */
  headingPremium: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 28396143-24b7-48e2-bd9e-6c14573d3ded
   * Codename: text_premium
   */
  textPremium: Elements.RichTextElement;

  /**
   * Plans (modular_content)
   * Required: false
   * Id: 83c312f3-b2f3-414b-8819-85192ec076e4
   * Codename: plans_premium
   */
  plansPremium: Elements.LinkedItemsElement<ServicesPremiumPlanModel>;

  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 987ea5db-16fc-42ca-b699-3b3a5d78ba3c
   * Codename: cta_button_premium
   */
  ctaButtonPremium: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: d2a84410-a9ce-4ff6-ac85-6099045c9e2c
   * Codename: testimonial
   */
  testimonial: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 43a75a23-8aa1-40d9-98a3-fa1185d08159
   * Codename: heading_professional
   */
  headingProfessional: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: c8e1392e-3c90-4c6c-b283-8b7c8b7c02cc
   * Codename: text_professional
   */
  textProfessional: Elements.RichTextElement;

  /**
   * Plans (modular_content)
   * Required: false
   * Id: c31a4825-e741-484b-ae76-2238cf935946
   * Codename: plans_professional
   */
  plansProfessional: Elements.LinkedItemsElement<ServicesPremiumPlanModel>;

  /**
   * Feature1 (rich_text)
   * Required: false
   * Id: 6067f236-d4e4-4752-895a-4210210e2e2c
   * Codename: feature1
   */
  feature1: Elements.RichTextElement;

  /**
   * Feature2 (rich_text)
   * Required: false
   * Id: 58d787dd-ff15-4ed3-af28-25c1d434e1c5
   * Codename: feature2
   */
  feature2: Elements.RichTextElement;

  /**
   * Feature3 (rich_text)
   * Required: false
   * Id: e84b8aca-817a-4a54-b066-25e2f581656b
   * Codename: feature3
   */
  feature3: Elements.RichTextElement;

  /**
   * Feature4 (rich_text)
   * Required: false
   * Id: 377ffc43-5471-472b-a1a4-fa67d4c027e4
   * Codename: feature4
   */
  feature4: Elements.RichTextElement;

  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 5c0a299d-4af6-428d-a61e-5c639dd39fa3
   * Codename: cta_button_professional
   */
  ctaButtonProfessional: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Tick icon (asset)
   * Required: false
   * Id: 2c092e0c-35bf-4353-ad82-dcc9b1bfe259
   * Codename: tick_icon
   */
  tickIcon: Elements.AssetsElement;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 6624788c-2e02-4a98-8543-3e53571b7579
   * Codename: heading_included
   */
  headingIncluded: Elements.RichTextElement;

  /**
   * Services (modular_content)
   * Required: false
   * Id: 2fc7a99b-101e-41db-b2a1-5c4d70bba496
   * Codename: services_included
   */
  servicesIncluded: Elements.LinkedItemsElement<ServicesServiceModel>;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: 3fbd9dc8-c41b-4186-ab8c-b79dd10d3007
   * Codename: testimonial_included
   */
  testimonialIncluded: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 69ad4b12-c00f-4a2e-8897-98572a2b1bd0
   * Codename: heading_additional
   */
  headingAdditional: Elements.RichTextElement;

  /**
   * Services (modular_content)
   * Required: false
   * Id: 7e249ba3-112b-472e-acbd-6f68db7566e2
   * Codename: services_additional
   */
  servicesAdditional: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Banner (modular_content)
   * Required: false
   * Id: 905b4c0d-39fe-43e4-9f82-ed0de884bc04
   * Codename: banner
   */
  banner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: c277efc4-8b2e-4114-9343-0f4a3364bee3
   * Codename: heading_faq
   */
  headingFaq: Elements.RichTextElement;

  /**
   * Categories (modular_content)
   * Required: false
   * Id: bf021236-950e-4baf-9b28-f7a370d3377f
   * Codename: faq_categories
   */
  faqCategories: Elements.LinkedItemsElement<PricingPageFaqCategoryModel>;
}> &
  HeroKK &
  Metadata;