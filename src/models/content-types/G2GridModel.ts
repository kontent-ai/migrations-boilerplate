import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { StatModel } from './StatModel';
import { ReviewModel } from './ReviewModel';
import { SharedContentModel } from './SharedContentModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * G2 Grid
 * Id: cb9ebac4-5d03-4ced-8991-8fac0392cb16
 * Codename: g2_grid
 */
export type G2GridModel = IContentItem<{
  /**
   * Rating (number)
   * Required: false
   * Id: 2a8d3610-0fbd-4691-98ee-890fffe428b2
   * Codename: rating
   */
  rating: Elements.NumberElement;

  /**
   * Rating logo text (text)
   * Required: false
   * Id: ddcca67c-de2b-4e00-8cc8-f2d8504ec8d1
   * Codename: rating_logo_text
   */
  ratingLogoText: Elements.TextElement;

  /**
   * Rating logo image (asset)
   * Required: false
   * Id: 65ef293b-413b-4b80-bcfb-b13e7f57804e
   * Codename: rating_logo_image
   */
  ratingLogoImage: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: 67b71c8d-b232-45e7-9235-2c5677d00a34
   * Codename: heading_customers
   */
  headingCustomers: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 6516fd7b-acab-4abc-9bac-21b37f2fc0f9
   * Codename: text_customers
   */
  textCustomers: Elements.RichTextElement;

  /**
   * Badges (asset)
   * Required: false
   * Id: e88e8348-fbcd-4cbb-88b9-3c1659ea3e95
   * Codename: badges
   */
  badges: Elements.AssetsElement;

  /**
   * Heading (text)
   * Required: false
   * Id: 0730e525-7f7d-4eb1-b11d-987d9b0d251b
   * Codename: heading_leader
   */
  headingLeader: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 94164d2f-15df-45ed-afdd-f47e0d8771cc
   * Codename: text_leader
   */
  textLeader: Elements.RichTextElement;

  /**
   * Grid iframe URL (text)
   * Required: false
   * Id: 71420024-9e8c-4fc0-9698-e8c5f5c55c9f
   * Codename: grid_iframe_url
   */
  gridIframeUrl: Elements.TextElement;

  /**
   * Stats (modular_content)
   * Required: false
   * Id: 5e13f918-0713-4ca8-b4cf-c80212911b9b
   * Codename: stats
   */
  stats: Elements.LinkedItemsElement<StatModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 1102ba26-4fe9-4567-be53-d884e0471ccd
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Reviews (modular_content)
   * Required: false
   * Id: 38ebed57-dd18-485c-889c-e221a852cc2d
   * Codename: reviews
   */
  reviews: Elements.LinkedItemsElement<ReviewModel>;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: 9a8f57cf-13c5-44ba-80de-369a087ecb0c
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: 89027c50-223f-4629-bc00-b418de4825a7
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;
}> &
  HeroKK &
  Metadata;