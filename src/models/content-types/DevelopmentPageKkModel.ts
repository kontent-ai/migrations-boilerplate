import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';
import { UmlpElementVideoModel } from './UmlpElementVideoModel';
import { CodeExampleModel } from './CodeExampleModel';
import { DevelopmentInfographicItemModel } from './DevelopmentInfographicItemModel';
import { DevelopmentFeatureKkModel } from './DevelopmentFeatureKkModel';
import { IntegrationModel } from './IntegrationModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { ReleaseProjects } from '../taxonomies/release_projects';
import { Opengraph } from '../content-type-snippets/opengraph';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Development Page KK
 * Id: 6ec8272a-7c85-4684-addf-4dcf54c8f719
 * Codename: development_page_kk
 */
export type DevelopmentPageKkModel = IContentItem<{
  /**
   * Hero headline (rich_text)
   * Required: false
   * Id: 02750797-d614-4b07-a785-2ecfbed078b1
   * Codename: hero_headline
   */
  heroHeadline: Elements.RichTextElement;

  /**
   * Hero lead paragraph (rich_text)
   * Required: false
   * Id: 4c2b98a0-9a63-4173-b9cd-3853d98e8de8
   * Codename: hero_lead_paragraph
   */
  heroLeadParagraph: Elements.RichTextElement;

  /**
   * Hero primary CTA (modular_content)
   * Required: true
   * Id: 43484d00-92f1-4c46-93f9-228d5f82874f
   * Codename: hero_primary_cta
   */
  heroPrimaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero secondary CTA (modular_content)
   * Required: true
   * Id: c708c0c2-2546-4189-a151-c348ac8dc02b
   * Codename: hero_secondary_cta
   */
  heroSecondaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero CTA separator (text)
   * Required: false
   * Id: 771c0f19-c92a-4fce-b82c-c95ac9161651
   * Codename: hero_cta_separator
   */
  heroCtaSeparator: Elements.TextElement;

  /**
   * Highlights (modular_content)
   * Required: false
   * Id: 12cef898-b9a3-4ac5-94e0-81f7d26345fa
   * Codename: highlights
   */
  highlights: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Video (modular_content)
   * Required: false
   * Id: c9360817-45ca-4690-8af8-54f5a044dd2b
   * Codename: video
   */
  video: Elements.LinkedItemsElement<UmlpElementVideoModel>;

  /**
   * Technology headline (rich_text)
   * Required: false
   * Id: b4a61081-b019-4dc0-8f8f-72be7b249983
   * Codename: technology_headline
   */
  technologyHeadline: Elements.RichTextElement;

  /**
   * Technology lead paragraph (rich_text)
   * Required: false
   * Id: b90b7fde-55c8-487c-bcf0-817a9a23261e
   * Codename: technology_lead_paragraph
   */
  technologyLeadParagraph: Elements.RichTextElement;

  /**
   * Technology code examples (modular_content)
   * Required: false
   * Id: 0ea6796c-3a53-491a-9b27-0130f5db0218
   * Codename: technology_code_examples
   */
  technologyCodeExamples: Elements.LinkedItemsElement<CodeExampleModel>;

  /**
   * Content headline (rich_text)
   * Required: false
   * Id: bf4b74cd-2220-44cd-875c-f6d29dd524e0
   * Codename: content_headline
   */
  contentHeadline: Elements.RichTextElement;

  /**
   * Content lead paragraph (rich_text)
   * Required: false
   * Id: e69fad53-7bc1-415a-85eb-ce5c62d1b3f0
   * Codename: content_lead_paragraph
   */
  contentLeadParagraph: Elements.RichTextElement;

  /**
   * Content infographic items (modular_content)
   * Required: false
   * Id: 7557c379-1131-4192-a12e-3633d9751700
   * Codename: content_infographic_items
   */
  contentInfographicItems: Elements.LinkedItemsElement<DevelopmentInfographicItemModel>;

  /**
   * Main features (modular_content)
   * Required: false
   * Id: 21239861-63b6-4165-9705-fab2d88c21d4
   * Codename: main_features
   */
  mainFeatures: Elements.LinkedItemsElement<DevelopmentFeatureKkModel>;

  /**
   * Support feature (modular_content)
   * Required: false
   * Id: 9b003f0a-90bb-4a5a-97f9-45731115b12a
   * Codename: support_feature
   */
  supportFeature: Elements.LinkedItemsElement<DevelopmentFeatureKkModel>;

  /**
   * Generator feature (modular_content)
   * Required: false
   * Id: 00f8353c-75cc-4540-8176-b1ff6eef5b2a
   * Codename: generator_feature
   */
  generatorFeature: Elements.LinkedItemsElement<DevelopmentFeatureKkModel>;

  /**
   * Other features (modular_content)
   * Required: false
   * Id: 08b3c609-f044-47d7-81e4-a1bdaf717ca2
   * Codename: other_features
   */
  otherFeatures: Elements.LinkedItemsElement<DevelopmentFeatureKkModel>;

  /**
   * Integrations headline (rich_text)
   * Required: false
   * Id: a3e74815-2c14-482c-abb4-761d5bc85da1
   * Codename: integrations_headline
   */
  integrationsHeadline: Elements.RichTextElement;

  /**
   * Integrations lead paragraph (rich_text)
   * Required: false
   * Id: 005de8a4-453c-4a64-89f2-9929078ea346
   * Codename: integrations_lead_paragraph
   */
  integrationsLeadParagraph: Elements.RichTextElement;

  /**
   * Integrations list (modular_content)
   * Required: true
   * Id: 84e11e2e-2bd0-49ce-adad-f8f8ff4f6cb4
   * Codename: integrations_list
   */
  integrationsList: Elements.LinkedItemsElement<IntegrationModel>;

  /**
   * Integrations CTA (modular_content)
   * Required: true
   * Id: e9d20dec-0ebe-4b49-bea6-f5b90e79676e
   * Codename: integrations_cta
   */
  integrationsCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Testimonial 1 (modular_content)
   * Required: false
   * Id: ab165585-8581-4327-9948-1e20f997ab71
   * Codename: testimonial_1
   */
  testimonial1: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Testimonial 2 (modular_content)
   * Required: false
   * Id: cd272cec-197f-4a4e-95ec-48d8c656f921
   * Codename: testimonial_2
   */
  testimonial2: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * CTA Banner (modular_content)
   * Required: true
   * Id: 47baadc5-e563-4921-884a-a7443f742f24
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: 0466d8cc-c876-4dd6-8616-5f89d6d91db3
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}> &
  Metadata &
  Opengraph;