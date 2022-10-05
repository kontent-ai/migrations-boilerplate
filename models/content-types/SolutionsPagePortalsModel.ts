import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { LogoModel } from './LogoModel';
import { SolutionsPageProductCapabilityModel } from './SolutionsPageProductCapabilityModel';
import { SolutionsPageCustomerHighlightModel } from './SolutionsPageCustomerHighlightModel';
import { TestimonialModel } from './TestimonialModel';
import { SolutionsPageCtaModel } from './SolutionsPageCtaModel';
import { SolutionsPageRelatedAssetModel } from './SolutionsPageRelatedAssetModel';
import { IntegrationModel } from './IntegrationModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Solutions page 4: Customer & Employee Portals
 * Id: 51a545eb-546c-4aff-a708-492d2e947c7b
 * Codename: solutions_page_portals
 */
export type SolutionsPagePortalsModel = IContentItem<{
  /**
   * Summary "Kontent helps you" (rich_text)
   * Required: true
   * Id: d3512289-0a20-4671-96a1-4079a6742dc4
   * Codename: summary_kontent_helps_you
   */
  summaryKontentHelpsYou: Elements.RichTextElement;

  /**
   * Logo sub-headline (text)
   * Required: true
   * Id: 9ea0e026-4811-4055-91eb-eb33017e5af0
   * Codename: logo_sub_headline
   */
  logoSubHeadline: Elements.TextElement;

  /**
   * Logo unit (modular_content)
   * Required: true
   * Id: 0e738ce0-f8f7-4595-916d-eee031c1187e
   * Codename: logo_unit
   */
  logoUnit: Elements.LinkedItemsElement<LogoModel>;

  /**
   * Capability unit: Empower customers (modular_content)
   * Required: true
   * Id: dc680394-d05b-42d0-b868-3436846181c6
   * Codename: capability_unit_empower_customers
   *
   * For devs: display text on the left, image on the right
   */
  capabilityUnitEmpowerCustomers: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Customer Highlight (modular_content)
   * Required: true
   * Id: a2c5b737-67d6-4ec5-b921-862af18fbd2a
   * Codename: customer_highlight
   *
   * For devs: display text on the right, image on the left
   */
  customerHighlight: Elements.LinkedItemsElement<SolutionsPageCustomerHighlightModel>;

  /**
   * Capability unit: Maximize existing content (modular_content)
   * Required: true
   * Id: 1ca83fa6-8d0c-4db6-878b-7b11efc5ab4f
   * Codename: capability_unit_maximize_existing_content
   */
  capabilityUnitMaximizeExistingContent: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Testimonial (modular_content)
   * Required: true
   * Id: 1687a7f6-45f7-4048-8efb-4367ea878125
   * Codename: testimonial
   */
  testimonial: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * Capability unit: Look great on any device (modular_content)
   * Required: true
   * Id: c689b943-f1f9-4237-9687-4e0094d7871a
   * Codename: capability_unit_look_great_on_any_device
   */
  capabilityUnitLookGreatOnAnyDevice: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Capability unit: Personalize the experience (modular_content)
   * Required: true
   * Id: 9e1485e3-9725-4028-8293-d51ed12d4e70
   * Codename: capability_unit_personalize_the_experience
   */
  capabilityUnitPersonalizeTheExperience: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Capability unit: Integrate with existing systems (modular_content)
   * Required: true
   * Id: 60e90402-5862-40c4-842e-f00229b6095e
   * Codename: capability_unit_integrate_with_existing_systems
   */
  capabilityUnitIntegrateWithExistingSystems: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * CTA unit (modular_content)
   * Required: true
   * Id: 1f8331fe-f95c-42bb-945b-5aa757bfc1eb
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SolutionsPageCtaModel>;

  /**
   * Related assets (modular_content)
   * Required: true
   * Id: 6e1c5b7d-2e72-4112-9464-9de5f709e54d
   * Codename: related_assets
   */
  relatedAssets: Elements.LinkedItemsElement<SolutionsPageRelatedAssetModel>;

  /**
   * Integrations (modular_content)
   * Required: false
   * Id: 3c39468c-9730-4740-ac79-b9b7415d61a7
   * Codename: integrations
   */
  integrations: Elements.LinkedItemsElement<IntegrationModel>;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;