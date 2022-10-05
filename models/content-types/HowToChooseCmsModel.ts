import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { ListItemRobustModel } from './ListItemRobustModel';
import { FloatingMenuModel } from './FloatingMenuModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * How To Choose CMS
 * Id: fa1cb86f-9486-42d4-b867-2fff902e4f6e
 * Codename: how_to_choose_cms
 */
export type HowToChooseCmsModel = IContentItem<{
  /**
   * Extra heading (text)
   * Required: false
   * Id: d54847f0-cc07-4955-ab9d-b6e65762e8f8
   * Codename: extra_heading
   *
   * Orange text above the main heading
   */
  extraHeading: Elements.TextElement;

  /**
   * Steps (modular_content)
   * Required: false
   * Id: 3d6c6e8a-75fc-4873-97bb-ad9906d9470d
   * Codename: steps
   */
  steps: Elements.LinkedItemsElement<ListItemRobustModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: c361a3ad-9fc6-4c77-ae4f-b894cce0f98d
   * Codename: menu_heading
   */
  menuHeading: Elements.TextElement;

  /**
   * Menu items (modular_content)
   * Required: false
   * Id: a1c83758-f1f5-4717-8d5c-0697d09d73ce
   * Codename: menu_items
   */
  menuItems: Elements.LinkedItemsElement<FloatingMenuModel>;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;