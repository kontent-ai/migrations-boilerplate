import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Hero } from '../content-type-snippets/hero';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Authors page
 * Id: eb11066b-95ec-4ea7-ba1e-78a99fcdb1d5
 * Codename: authors_page
 */
export type AuthorsPageModel = IContentItem<{
  /**
   * Metadata title (text)
   * Required: false
   * Id: f1abca36-d8ca-4037-bce1-c37cb9afa209
   * Codename: metadata_title
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata description (text)
   * Required: false
   * Id: 28dbf81b-ba5c-44cc-a4d4-980efd0c936d
   * Codename: metadata_description
   */
  metadataDescription: Elements.TextElement;
}> &
  Hero &
  SitemapMetadata;
