import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ResourceModel } from './ResourceModel';
import { CaseStudyModel } from './CaseStudyModel';
import { BlogPostModel } from './BlogPostModel';
import { WebinarModel } from './WebinarModel';
import { EventModel } from './EventModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Resource Tile Grid
 * Id: 4c4e3044-7412-474b-8714-63c23d833740
 * Codename: umlp_element___resource_tile_grid
 */
export type UmlpElementResourceTileGridModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: 61976a5a-c0bf-4e24-8588-7136585f7eb0
   * Codename: heading
   *
   * Optional heading. This is only used when component is used as a standalone section e.g. UMLP pages.
   */
  heading: Elements.TextElement;

  /**
   * Tiles (modular_content)
   * Required: true
   * Id: 56c4e8b2-06a9-477f-9837-0fca8faa5b09
   * Codename: tiles
   */
  tiles: Elements.LinkedItemsElement<
    ResourceModel | CaseStudyModel | BlogPostModel | WebinarModel | EventModel
  >;
}>;