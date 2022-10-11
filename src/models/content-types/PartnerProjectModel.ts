import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Partner Project
 * Id: 88fac8eb-0067-4e0f-b6e0-ecb2f77b684f
 * Codename: partner_project
 */
export type PartnerProjectModel = IContentItem<{
  /**
   * Name (text)
   * Required: true
   * Id: 34e39658-340d-caeb-35bb-7a4ad12fb89a
   * Codename: name
   *
   * Name of the project
   */
  name: Elements.TextElement;

  /**
   * Url (text)
   * Required: true
   * Id: 8c839c37-4737-7f6e-0d0f-b4a365e13f49
   * Codename: url
   *
   * URL of the website or any other resource related to the project
   */
  url: Elements.TextElement;

  /**
   * Screenshot (asset)
   * Required: false
   * Id: 006865b3-8cab-041a-29eb-17050b22f117
   * Codename: screenshot
   *
   * Screenshot of the website or other image representing the project
   */
  screenshot: Elements.AssetsElement;

  /**
   * Date (date_time)
   * Required: true
   * Id: 489fecc3-3e67-db8a-8e23-cd2ce9ee28ec
   * Codename: date
   *
   * Date when project was finished. If you don't know the exact day, enter the first day of the month.
   */
  date: Elements.DateTimeElement;
}> &
  SitemapMetadata;
