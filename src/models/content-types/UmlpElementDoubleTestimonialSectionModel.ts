import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { TestimonialModel } from './TestimonialModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Double testimonial section
 * Id: b4073a26-a051-4e18-ac73-e5d905bdcd68
 * Codename: umlp_element___double_testimonial_section
 */
export type UmlpElementDoubleTestimonialSectionModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: 19e98df6-00b9-4cde-a577-94a149118816
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Testimonials (modular_content)
   * Required: true
   * Id: 0b78dd40-325b-4923-a1f9-28205a6fac63
   * Codename: testimonials
   */
  testimonials: Elements.LinkedItemsElement<TestimonialModel>;
}>;