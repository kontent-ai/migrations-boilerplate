import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { TabItemModel } from './TabItemModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Collection Landing Page
 * Id: cb06bbe3-4738-4a51-a918-2ca94e00a5e3
 * Codename: collection_landing_page
 */
export type CollectionLandingPageModel = IContentItem<{
  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 72d3fe4a-c814-4071-ba6a-044fa83e0d87
   * Codename: cta_button
   */
  ctaButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 33d10d29-ddb1-4b4c-9868-5c86fe3aeb97
   * Codename: heading_1
   */
  heading1: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 300a926f-3d73-4448-9430-68ea4d699708
   * Codename: text_1
   */
  text1: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 86ed1801-be46-46f4-874c-d7aeb56bad8e
   * Codename: image_1
   */
  image1: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: 7e227660-9354-4729-bf86-e310757ae9fb
   * Codename: heading_2
   */
  heading2: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 6f6c5869-0a69-447e-b41a-b1e705ce5440
   * Codename: text_2
   */
  text2: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: ca3b957c-cd2a-4ab3-b335-c30245153652
   * Codename: image_2
   */
  image2: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: c118a8b4-612c-47ba-a77d-e1661c2a5126
   * Codename: heading_3
   */
  heading3: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 144c7a28-965b-42f4-b557-9980b811c75a
   * Codename: text_3
   */
  text3: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 5557eac3-9392-4ff2-b92f-056b8563e6d7
   * Codename: image_3
   */
  image3: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: b9049f16-06a9-4464-a9b0-a39636ca4f03
   * Codename: heading_4
   */
  heading4: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 59c60aca-2a1d-4c8c-8d67-4d26e51e3b7f
   * Codename: text_4
   */
  text4: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 1eda79a7-bbcc-4167-8e98-da4785047cbc
   * Codename: image_4
   */
  image4: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: b88c44ac-61d6-4cb6-a8b5-458c0d879e20
   * Codename: heading_tabs
   */
  headingTabs: Elements.TextElement;

  /**
   * Tabs (modular_content)
   * Required: false
   * Id: b00edd7f-e7e5-4930-a279-df1d989072cc
   * Codename: tabs
   */
  tabs: Elements.LinkedItemsElement<TabItemModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 25aa2a22-6dfe-4c31-b5cd-5371dc3905b5
   * Codename: heading_5
   */
  heading5: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 9d1d9a24-85b3-4409-a7c3-6ecd0c338427
   * Codename: text_5
   */
  text5: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 92434a59-1bae-4852-ae65-a0b7c3f6562c
   * Codename: image_5
   */
  image5: Elements.AssetsElement;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: ec9aada4-6eae-438b-a36d-276b322e1baa
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;