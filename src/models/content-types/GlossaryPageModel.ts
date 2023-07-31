import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { GlossaryTermModel } from './GlossaryTermModel';
import { Metadata } from '../content-type-snippets/metadata';
import { Opengraph } from '../content-type-snippets/opengraph';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Glossary Page
 * Id: ce01bb2e-e2ca-4f64-a334-3696437fe1ee
 * Codename: glossary_page
 */
export type GlossaryPageModel = IContentItem<{
  /**
   * Glossary terms (modular_content)
   * Required: false
   * Id: 33a5bcf6-14a6-495d-909c-7aa16c643f45
   * Codename: glossary_terms
   */
  glossaryTerms: Elements.LinkedItemsElement<GlossaryTermModel>;
}> &
  HeroKK &
  Metadata &
  Opengraph &
  SitemapMetadata;