import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { ContentItemImageModel } from './ContentItemImageModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Discord Page
 * Id: 7858e53a-9d3b-4439-9ff3-97c2586be51f
 * Codename: discord_page
 */
export type DiscordPageModel = IContentItem<{
  /**
   * CTA Button (modular_content)
   * Required: false
   * Id: 784e808b-cfda-400c-8d6a-da5ce8504c5e
   * Codename: cta_button
   */
  ctaButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 54de754c-bc45-4fa3-bd52-0624dfc838f7
   * Codename: heading_benefits
   */
  headingBenefits: Elements.TextElement;

  /**
   * Text 1 (rich_text)
   * Required: false
   * Id: dc4667a8-c840-4423-88d5-7d0704ac55aa
   * Codename: text_1
   */
  text1: Elements.RichTextElement;

  /**
   * Image 1 (asset)
   * Required: false
   * Id: b9bc3c61-5081-4144-83a7-a5a799611a46
   * Codename: image_1
   */
  image1: Elements.AssetsElement;

  /**
   * Text 2 (rich_text)
   * Required: false
   * Id: 15b3d0bd-d665-40ae-a01a-9f90285107c3
   * Codename: text_2
   */
  text2: Elements.RichTextElement;

  /**
   * Image 2 (asset)
   * Required: false
   * Id: f7c2c5a6-a715-48e7-8206-dc268c612d28
   * Codename: image_2
   */
  image2: Elements.AssetsElement;

  /**
   * Text 3 (rich_text)
   * Required: false
   * Id: 4a1b627e-856f-4801-b05e-ed292457ae3b
   * Codename: text_3
   */
  text3: Elements.RichTextElement;

  /**
   * Image 3 (asset)
   * Required: false
   * Id: d760523f-f3fb-4ef8-a8c3-908592673182
   * Codename: image_3
   */
  image3: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: f5f04fc1-1018-4ea9-9129-e4d2c9ea1eb9
   * Codename: heading_mvps
   */
  headingMvps: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: f320b53d-be30-4ecf-867d-0ed5238d7774
   * Codename: text_mvps
   */
  textMvps: Elements.RichTextElement;

  /**
   * Photos (modular_content)
   * Required: false
   * Id: 3f7fe151-07e9-46ac-b025-ff7478ce3b2a
   * Codename: photos_mvps
   */
  photosMvps: Elements.LinkedItemsElement<ContentItemImageModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: 587d441d-46af-457e-80f5-f20c0c9d263a
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;
}> &
  HeroKK &
  Metadata;