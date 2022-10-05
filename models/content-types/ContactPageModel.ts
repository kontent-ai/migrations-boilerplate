import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Hero } from '../content-type-snippets/hero';
import { OfficeModel } from './OfficeModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Contact page
 * Id: 6a3b2b06-dc23-4da1-ac1b-c073d8180ebd
 * Codename: contact_page
 */
export type ContactPageModel = IContentItem<{
  /**
   * Headline (text)
   * Required: true
   * Id: 4ec6d557-d3cc-236b-42a5-9a78637ace24
   * Codename: headline
   *
   * !OBSOLETE!
   */
  headline: Elements.TextElement;

  /**
   * Subheadline (rich_text)
   * Required: true
   * Id: e8372172-ee8e-a2df-ce1f-8bac2606a6b4
   * Codename: subheadline
   *
   * !OBSOLETE!
   */
  subheadline: Elements.RichTextElement;

  /**
   * CTA text (text)
   * Required: false
   * Id: ac8323c4-e2f9-7863-ecf8-1d0974865689
   * Codename: cta_text
   *
   * !OBSOLETE!
   */
  ctaText: Elements.TextElement;

  /**
   * E-mail headline (text)
   * Required: false
   * Id: 4261e743-b4b6-bf31-e8f7-cc6e38bb901a
   * Codename: e_mail_headline
   */
  eMailHeadline: Elements.TextElement;

  /**
   * E-mail text (text)
   * Required: false
   * Id: f0797f41-9d41-5bb7-8005-e6700e5ea3bb
   * Codename: e_mail_text
   */
  eMailText: Elements.TextElement;

  /**
   * E-mail address (text)
   * Required: false
   * Id: 4072b66c-0b8d-ff5b-f639-f78f9e2b5560
   * Codename: e_mail_address
   */
  eMailAddress: Elements.TextElement;

  /**
   * Community headline (text)
   * Required: false
   * Id: 1298ffd6-7197-4714-ed9b-4bb64c76fc58
   * Codename: community_headline
   */
  communityHeadline: Elements.TextElement;

  /**
   * Community text (text)
   * Required: false
   * Id: 7f2dfd63-df4d-dd65-668e-4c079689b9ed
   * Codename: community_text
   */
  communityText: Elements.TextElement;

  /**
   * Social media headline (text)
   * Required: false
   * Id: c58ce6f6-ca04-6e9b-9bf6-bf3339f0791d
   * Codename: social_media_headline
   */
  socialMediaHeadline: Elements.TextElement;

  /**
   * Offices headline (text)
   * Required: false
   * Id: fe49a044-2d6d-bb31-6eec-9f8b1c86b59e
   * Codename: offices_headline
   */
  officesHeadline: Elements.TextElement;

  /**
   * Offices subheadline (text)
   * Required: false
   * Id: b4a87a1c-fe3e-60b4-b6de-c73425f68565
   * Codename: offices_subheadline
   */
  officesSubheadline: Elements.TextElement;

  /**
   * Offices (modular_content)
   * Required: false
   * Id: 90b56f95-6840-627f-872d-4eaa9368a53b
   * Codename: offices
   */
  offices: Elements.LinkedItemsElement<OfficeModel>;

  /**
   * Metadata title (text)
   * Required: false
   * Id: 74fb60d4-62bf-25ed-7335-d50dedf1d035
   * Codename: metadata_title
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata description (text)
   * Required: false
   * Id: ba9a218d-6e99-2229-347c-d700da0b6617
   * Codename: metadata_description
   */
  metadataDescription: Elements.TextElement;
}> &
  Hero &
  SitemapMetadata;
