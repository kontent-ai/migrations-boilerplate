import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { KontentSellingPointModel } from './KontentSellingPointModel';
import { TestimonialModel } from './TestimonialModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { TableModel } from './TableModel';
import { TabItemModel } from './TabItemModel';
import { AchievementModel } from './AchievementModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Sitecore Konabos Page
 * Id: fcd22917-da0e-41d8-aa8d-688dfcb2d39e
 * Codename: sitecore_konabos_page
 */
export type SitecoreKonabosPageModel = IContentItem<{
  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: b4b7bd44-4b53-4331-b812-32992cadd0a2
   * Codename: cta_button
   */
  ctaButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 97395d91-3687-4396-9698-947588d6956c
   * Codename: selling_points_heading
   */
  sellingPointsHeading: Elements.TextElement;

  /**
   * Selling points (modular_content)
   * Required: false
   * Id: 8b38dd4e-da15-47a1-9d99-2a42a9fc85d0
   * Codename: selling_points
   */
  sellingPoints: Elements.LinkedItemsElement<KontentSellingPointModel>;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: 2275dd50-dae0-40d1-b484-0d1c0fd1e1f7
   * Codename: testimonial
   */
  testimonial: Elements.LinkedItemsElement<
    TestimonialModel | RichTestimonialModel
  >;

  /**
   * Table (modular_content)
   * Required: false
   * Id: c035e6c4-365b-4827-8a0c-e675f64f603d
   * Codename: table
   */
  table: Elements.LinkedItemsElement<TableModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 5174f0d4-4272-4655-a04b-959089bb86a1
   * Codename: tabs_heading
   */
  tabsHeading: Elements.TextElement;

  /**
   * Tabs (modular_content)
   * Required: false
   * Id: ae834a12-9c24-4fae-b203-016f7ea51fe3
   * Codename: tabs
   */
  tabs: Elements.LinkedItemsElement<TabItemModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 7301adaf-c70b-4e3d-a8a5-aa8770366056
   * Codename: recognitions_heading
   */
  recognitionsHeading: Elements.TextElement;

  /**
   * Recognitions (modular_content)
   * Required: false
   * Id: c4ef7203-8c61-459c-be5b-766bcfbe374f
   * Codename: recognitions
   */
  recognitions: Elements.LinkedItemsElement<AchievementModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: c1e3fd0b-8b10-41d8-a262-649567362c9f
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: c86c8bed-a01f-44f0-9294-b68b98d2cd45
   * Codename: partner_heading
   */
  partnerHeading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: a040f5c6-a620-4332-ac58-2f51b4f8f526
   * Codename: partner_text
   */
  partnerText: Elements.RichTextElement;

  /**
   * Badge logo (asset)
   * Required: false
   * Id: dce50454-50fa-4335-8aa1-28dcf1233a4a
   * Codename: badge_logo
   */
  badgeLogo: Elements.AssetsElement;

  /**
   * Badge text (text)
   * Required: false
   * Id: 3377f486-ccd0-44ee-9af9-0b1441c0528d
   * Codename: badge_text
   */
  badgeText: Elements.TextElement;

  /**
   * Badge link (text)
   * Required: false
   * Id: 814154c7-349f-460f-a0d0-b158668bffb1
   * Codename: badge_link
   */
  badgeLink: Elements.TextElement;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;