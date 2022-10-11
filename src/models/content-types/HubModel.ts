import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { ArticleModel } from './ArticleModel';
import { ContentPieceModel } from './ContentPieceModel';
import { PersonModel } from './PersonModel';
import { SolutionsPageRelatedAssetModel } from './SolutionsPageRelatedAssetModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Hub
 * Id: 7aa0dd1d-6dc1-47c6-be88-4b5c86845e7d
 * Codename: hub
 */
export type HubModel = IContentItem<{
  /**
   * Featured articles heading (rich_text)
   * Required: false
   * Id: 5a37c3b6-7e51-4064-952f-a7f7c177d6d7
   * Codename: featured_articles_heading
   */
  featuredArticlesHeading: Elements.RichTextElement;

  /**
   * Featured articles (modular_content)
   * Required: true
   * Id: acea2c0a-55ea-4a34-871d-f0d93782fde5
   * Codename: featured_articles
   */
  featuredArticles: Elements.LinkedItemsElement<ArticleModel>;

  /**
   * Latest articles heading (rich_text)
   * Required: false
   * Id: 1e7a8bd8-95bb-4b45-a877-ba3f621de92a
   * Codename: latest_articles_heading
   */
  latestArticlesHeading: Elements.RichTextElement;

  /**
   * Content (modular_content)
   * Required: false
   * Id: 855f08dd-a767-4206-9075-f1b089683470
   * Codename: certification_content
   */
  certificationContent: Elements.LinkedItemsElement<ContentPieceModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: 168c624e-da8f-48c2-99c2-4e9f1fd36192
   * Codename: heading_graduates
   */
  headingGraduates: Elements.RichTextElement;

  /**
   * Graduates (modular_content)
   * Required: false
   * Id: ca8bac62-c4e5-4811-8bb5-6ce0b524b425
   * Codename: graduates
   */
  graduates: Elements.LinkedItemsElement<PersonModel>;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: dab81568-2f7c-4cbb-94f6-3ce67fb4c97b
   * Codename: heading_resources
   */
  headingResources: Elements.RichTextElement;

  /**
   * Related assets (modular_content)
   * Required: false
   * Id: 85dccc28-ba58-4a9f-8826-c16b408e7250
   * Codename: related_assets
   */
  relatedAssets: Elements.LinkedItemsElement<SolutionsPageRelatedAssetModel>;

  /**
   * Articles (modular_content)
   * Required: true
   * Id: b7277f32-36f9-4223-8b4d-7102089acb89
   * Codename: articles
   */
  articles: Elements.LinkedItemsElement<ArticleModel>;

  /**
   * URL slug (url_slug)
   * Required: false
   * Id: 16c78fd2-cb2a-44b9-9423-3834a69c86e2
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;
