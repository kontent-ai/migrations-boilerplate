import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Hero } from '../content-type-snippets/hero';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Resource page
 * Id: 45a69f1b-378e-43b9-9969-8b49c27a7462
 * Codename: resource_page
 */
export type ResourcePageModel = IContentItem<{
  /**
   * No resources found message (text)
   * Required: false
   * Id: ded744d7-40ff-4161-9c16-6bce52ef19fc
   * Codename: no_resources_found_message
   */
  noResourcesFoundMessage: Elements.TextElement;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: ed063afc-e6e1-4cf6-acc6-07855e760b77
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Metadata Title (text)
   * Required: false
   * Id: 4ff05522-fbf6-4381-a796-2d8ce4f254f5
   * Codename: metadata_title
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata Description (text)
   * Required: false
   * Id: b650b988-bc53-4999-a18a-b5e7890cecb9
   * Codename: metadata_description
   */
  metadataDescription: Elements.TextElement;
}> &
  Hero &
  SitemapMetadata;