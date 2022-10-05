import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { CompareKontentWithXModel } from './CompareKontentWithXModel';
import { LinkModel } from './LinkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Compare with X Table
 * Id: 8770d809-639c-4907-a30f-6b1bd9ced12b
 * Codename: compare_with_x_table
 */
export type CompareWithXTableModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: 2c8da4e6-f747-4094-90c0-4874beb9e848
   * Codename: compare_table_heading
   */
  compareTableHeading: Elements.TextElement;

  /**
   * Kontent logo (asset)
   * Required: true
   * Id: ed875108-16d1-4f9b-b0c4-d6d72b8d7cc3
   * Codename: kontent_logo
   */
  kontentLogo: Elements.AssetsElement;

  /**
   * Competitor logo (asset)
   * Required: true
   * Id: 870535ad-91eb-43b1-9df2-0569d57483fe
   * Codename: competitor_logo
   */
  competitorLogo: Elements.AssetsElement;

  /**
   * Comparison lines (modular_content)
   * Required: true
   * Id: 028b763c-9eec-45b0-b525-a4d9fb230f60
   * Codename: comparison_lines
   */
  comparisonLines: Elements.LinkedItemsElement<CompareKontentWithXModel>;

  /**
   * Link (modular_content)
   * Required: false
   * Id: 057223f5-398e-439f-b61c-b14cc6d835c6
   * Codename: compare_table_link
   */
  compareTableLink: Elements.LinkedItemsElement<LinkModel>;
}>;