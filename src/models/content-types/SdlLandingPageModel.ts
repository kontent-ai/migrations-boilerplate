import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { ModularItemCardElementModel } from './ModularItemCardElementModel';
import { TestimonialModel } from './TestimonialModel';
import { SolutionsPageProductCapabilityModel } from './SolutionsPageProductCapabilityModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * SDL Landing Page
 * Id: dcc88492-2dd4-45ad-aae4-151f9b242faa
 * Codename: sdl_landing_page
 */
export type SdlLandingPageModel = IContentItem<{
  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 074f7929-15f0-428c-9fda-dffdc821ef2c
   * Codename: cta_button
   */
  ctaButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 8bbd9f72-9be1-42d9-bf34-064655ffbf18
   * Codename: heading_infographics
   */
  headingInfographics: Elements.RichTextElement;

  /**
   * Infographic (asset)
   * Required: false
   * Id: 3846fbf8-edd6-4be8-bc98-478d5aa0a786
   * Codename: infographic
   */
  infographic: Elements.AssetsElement;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 5c2be656-7e87-414f-a29f-1a932cbf9a13
   * Codename: heading_localizations
   */
  headingLocalizations: Elements.RichTextElement;

  /**
   * Localizations list (modular_content)
   * Required: false
   * Id: 6ca19b6f-1d27-4e02-8442-b700249fb26f
   * Codename: localizations_list
   */
  localizationsList: Elements.LinkedItemsElement<ModularItemCardElementModel>;

  /**
   * Testimonials (modular_content)
   * Required: false
   * Id: b6aa4afa-ded4-4284-aa8f-37964d7fca55
   * Codename: testimonials
   */
  testimonials: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: b11ec214-7cc2-490d-ac29-e9f1d5bb856d
   * Codename: heading_features
   */
  headingFeatures: Elements.RichTextElement;

  /**
   * Intro (modular_content)
   * Required: false
   * Id: a680acda-0a81-44d1-aed4-6657aca311d5
   * Codename: intro
   */
  intro: Elements.LinkedItemsElement<SolutionsPageProductCapabilityModel>;

  /**
   * Features (modular_content)
   * Required: false
   * Id: 64d3d07b-8cc4-4053-9733-6f18c85fa14d
   * Codename: features
   */
  features: Elements.LinkedItemsElement<ModularItemCardElementModel>;

  /**
   * Banner (modular_content)
   * Required: false
   * Id: aba02b61-a662-45a4-916f-ef3e76e7e53c
   * Codename: banner
   */
  banner: Elements.LinkedItemsElement<CtaBannerComponentModel>;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;