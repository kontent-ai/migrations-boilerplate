import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Roadmap — Feature Status
 * Id: d0be3aa4-ab70-4f72-8113-424abbaa14dd
 * Codename: roadmap___feature_status
 */
export type RoadmapFeatureStatusModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: 393187c4-2b01-41a4-89f9-795a6e78b2dd
   * Codename: title
   *
   * Title of feature status
   */
  title: Elements.TextElement;

  /**
   * Description (text)
   * Required: false
   * Id: 27c00846-aac2-4e40-9ad8-18487d3c8c67
   * Codename: description
   *
   * Description of feature status
   */
  description: Elements.TextElement;

  /**
   * Status Option Codename (text)
   * Required: false
   * Id: 6f9e8730-3137-411e-b55c-ced05a1111fa
   * Codename: status_option_codename
   *
   * There should be also option for this status in "Roadmap — Feature" content type and you should put codename of this option here.
   */
  statusOptionCodename: Elements.TextElement;
}>;
