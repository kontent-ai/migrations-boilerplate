import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ModularItemCardElementModel } from './ModularItemCardElementModel';
import { TestimonialModel } from './TestimonialModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { ListModel } from './ListModel';
import { SolutionHighlightModel } from './SolutionHighlightModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { PricingPlanCardComponentModel } from './PricingPlanCardComponentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Features Category
 * Id: 4c6b5ca1-0670-4012-b2ad-bffb69f17f81
 * Codename: features_category
 */
export type FeaturesCategoryModel = IContentItem<{
  /**
   * Navigation title (text)
   * Required: false
   * Id: 64b0ca90-7ce1-4eb9-8635-573883362215
   * Codename: navigation_title
   *
   * Text in the sub navigation e.g. Content Management
   */
  navigationTitle: Elements.TextElement;

  /**
   * Heading (text)
   * Required: false
   * Id: 4543d780-3bac-42df-8653-37156fc8e500
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Cards (modular_content)
   * Required: false
   * Id: b594eac4-3187-4037-ac3e-82a0829c0ea8
   * Codename: cards
   */
  cards: Elements.LinkedItemsElement<ModularItemCardElementModel>;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: d3fbdc64-8eca-45b5-b9ec-eddf632ca103
   * Codename: testimonial
   */
  testimonial: Elements.LinkedItemsElement<
    TestimonialModel | RichTestimonialModel
  >;

  /**
   * List Heading (text)
   * Required: false
   * Id: fd5fbc0a-cc8f-4c4e-9528-d422038f6485
   * Codename: list_heading
   */
  listHeading: Elements.TextElement;

  /**
   * List (modular_content)
   * Required: false
   * Id: abb9cbe2-d175-4cef-9520-723cd739ae6d
   * Codename: list
   */
  list: Elements.LinkedItemsElement<ListModel>;

  /**
   * Solutions Highlight (modular_content)
   * Required: false
   * Id: f160a216-54fb-4fe5-bce8-6a5573ebf1a7
   * Codename: solutions_highlight
   */
  solutionsHighlight: Elements.LinkedItemsElement<SolutionHighlightModel>;

  /**
   * Developer plan heading (text)
   * Required: false
   * Id: f0125664-7f08-4dc1-8d49-607349005811
   * Codename: developer_plan_heading
   */
  developerPlanHeading: Elements.TextElement;

  /**
   * Developer plan banner (modular_content)
   * Required: false
   * Id: 3b3fce82-c9d9-4de8-a31b-96c9c7b261f6
   * Codename: developer_plan_banner
   */
  developerPlanBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Pricing plans heading (text)
   * Required: false
   * Id: 66a2284e-f028-40e1-9cef-d22649908153
   * Codename: pricing_plans_heading
   */
  pricingPlansHeading: Elements.TextElement;

  /**
   * Pricing plan cards (modular_content)
   * Required: false
   * Id: cb3d2f57-3b9c-4f0e-a75b-f34a410dba7d
   * Codename: pricing_plan_cards
   */
  pricingPlanCards: Elements.LinkedItemsElement<PricingPlanCardComponentModel>;
}>;