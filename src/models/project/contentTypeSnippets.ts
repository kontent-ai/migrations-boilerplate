/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Project name: Kontent.ai
 * Environment: Production 2022
 * Project Id: 4ec262a7-3d6c-008c-aa10-1e6ffc6c2e14
 */
export const contentTypeSnippets = {
  /**
   * Metadata
   * Last modified: Mon Oct 22 2018 14:47:11 GMT+0200 (Central European Summer Time)
   */
  metadata: {
    codename: 'metadata',
    id: '3284954e-a1fa-4be9-bc19-53a05da9b205',
    externalId: undefined,
    name: 'Metadata',
    elements: {
      /**
       * Metadata title (text)
       */
      metadata__metadata_title: {
        codename: 'metadata__metadata_title',
        id: '62d40c2b-b281-a2e8-52d2-ca0b9e6dc214',
        externalId: undefined,
        name: 'Metadata title',
        required: false,
        type: 'text',
      },

      /**
       * Metadata description (text)
       */
      metadata__metadata_description: {
        codename: 'metadata__metadata_description',
        id: '17b40763-3aec-698c-9e34-0d1ca0a28b80',
        externalId: undefined,
        name: 'Metadata description',
        required: false,
        type: 'text',
      },

      /**
       * Metadata image (asset)
       *
       * Ideally 1200px wide
       */
      metadata__metadata_image: {
        codename: 'metadata__metadata_image',
        id: '0b019c26-b4ea-4c27-aa2f-57df7c2974f1',
        externalId: undefined,
        name: 'Metadata image',
        required: false,
        type: 'asset',
      },
    },
  },

  /**
   * Opengraph
   * Last modified: Mon Sep 09 2019 14:16:29 GMT+0200 (Central European Summer Time)
   */
  opengraph: {
    codename: 'opengraph',
    id: '77c938c2-a9ee-4769-859a-13db802a16ef',
    externalId: undefined,
    name: 'Opengraph',
    elements: {
      /**
       * Opengraph Title (text)
       */
      opengraph__opengraph_title: {
        codename: 'opengraph__opengraph_title',
        id: '43fc7f66-5b18-4d89-aa83-bf8a46d0c2ab',
        externalId: undefined,
        name: 'Opengraph Title',
        required: false,
        type: 'text',
      },

      /**
       * Opengraph Description (rich_text)
       */
      opengraph__opengraph_description: {
        codename: 'opengraph__opengraph_description',
        id: 'e7f5512e-1530-4c2d-bda0-0c5091d341ef',
        externalId: undefined,
        name: 'Opengraph Description',
        required: false,
        type: 'rich_text',
      },

      /**
       * Opengraph Image (asset)
       */
      opengraph__opengraph_image: {
        codename: 'opengraph__opengraph_image',
        id: 'd7b735fa-72e6-4b83-bc41-b87a32f9f19c',
        externalId: undefined,
        name: 'Opengraph Image',
        required: false,
        type: 'asset',
      },
    },
  },

  /**
   * Sitemap metadata
   * Last modified: Mon Jul 25 2022 09:19:01 GMT+0200 (Central European Summer Time)
   */
  sitemap_metadata: {
    codename: 'sitemap_metadata',
    id: '4c7796e1-14f5-4122-9653-f697d6c84856',
    externalId: undefined,
    name: 'Sitemap metadata',
    elements: {
      /**
       * Visibility (multiple_choice)
       *
       * Default value is Included.
       */
      sitemap_metadata__visibility: {
        codename: 'sitemap_metadata__visibility',
        id: '51fb5bf3-1956-4750-9f62-db5d5b6273ba',
        externalId: undefined,
        name: 'Visibility',
        required: false,
        type: 'multiple_choice',
      },

      /**
       * Priority (text)
       *
       * Enter values between 0 and 1.  Example: 0.7. If not set or invalid, default value of 0.5 is going to be set.
       */
      sitemap_metadata__priority: {
        codename: 'sitemap_metadata__priority',
        id: '9b88c6e4-aad3-458f-adc2-daada108bad2',
        externalId: undefined,
        name: 'Priority',
        required: false,
        type: 'text',
      },
    },
  },

  /**
   * Hero KK
   * Last modified: Tue Feb 08 2022 09:34:08 GMT+0100 (Central European Standard Time)
   */
  hero_kk: {
    codename: 'hero_kk',
    id: '7201497d-02f5-4827-9649-37042bdeb64b',
    externalId: undefined,
    name: 'Hero KK',
    elements: {
      /**
       * Hero headline (text)
       */
      hero_kk__hero_headline: {
        codename: 'hero_kk__hero_headline',
        id: '1ac6fd1b-468a-4236-ba5d-a31d739f62fd',
        externalId: undefined,
        name: 'Hero headline',
        required: false,
        type: 'text',
      },

      /**
       * Hero headline rich (rich_text)
       *
       * In case you need richtext support for the headline. Otherwise, use the standard headline
       */
      hero_kk__hero_headline_rich: {
        codename: 'hero_kk__hero_headline_rich',
        id: '44aadeba-ff49-4d07-944a-d28e1ae38b6d',
        externalId: undefined,
        name: 'Hero headline rich',
        required: false,
        type: 'rich_text',
      },

      /**
       * Hero lead paragraph (rich_text)
       *
       * Ideally max. 1 paragraph of text
       */
      hero_kk__hero_lead_paragraph: {
        codename: 'hero_kk__hero_lead_paragraph',
        id: '9518d495-81b5-46da-a03e-07793bbd0d56',
        externalId: undefined,
        name: 'Hero lead paragraph',
        required: false,
        type: 'rich_text',
      },

      /**
       * Hero image (asset)
       */
      hero_kk__hero_image: {
        codename: 'hero_kk__hero_image',
        id: '34846794-da2a-4615-8bc4-af67b7ee407d',
        externalId: undefined,
        name: 'Hero image',
        required: false,
        type: 'asset',
      },
    },
  },

  /**
   * Hero
   * Last modified: Thu Jan 11 2018 08:33:36 GMT+0100 (Central European Standard Time)
   */
  hero: {
    codename: 'hero',
    id: 'c9b67fcb-b27e-4f67-8a81-56655f752638',
    externalId: undefined,
    name: 'Hero',
    elements: {
      /**
       * Title (text)
       */
      hero__title: {
        codename: 'hero__title',
        id: '55efa49c-f78f-588a-3228-871cfd79ba69',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
      },

      /**
       * Perex (rich_text)
       */
      hero__perex: {
        codename: 'hero__perex',
        id: 'a48c30cb-b5e7-65b4-bda6-8da2363a089e',
        externalId: undefined,
        name: 'Perex',
        required: false,
        type: 'rich_text',
      },
    },
  },

  /**
   * UMLP content
   * Last modified: Sat Aug 06 2022 10:19:04 GMT+0200 (Central European Summer Time)
   */
  umlp_content: {
    codename: 'umlp_content',
    id: '4c6ebc3f-e3fd-4d27-984b-287a36b5e90d',
    externalId: undefined,
    name: 'UMLP content',
    elements: {
      /**
       * Content (modular_content)
       */
      umlp_content__content: {
        codename: 'umlp_content__content',
        id: '824c4867-e4db-4062-b4cc-b721076b1ada',
        externalId: undefined,
        name: 'Content',
        required: true,
        type: 'modular_content',
      },
    },
  },

  /**
   * Content brief
   * Last modified: Fri Feb 14 2020 12:28:16 GMT+0100 (Central European Standard Time)
   */
  content_brief: {
    codename: 'content_brief',
    id: 'a1a6f4a2-fa99-4453-a7f7-a394b39ef663',
    externalId: undefined,
    name: 'Content brief',
    elements: {
      /**
       * Persona (taxonomy)
       */
      content_brief__persona: {
        codename: 'content_brief__persona',
        id: '1047e025-1cf1-43ec-bb44-0ca354013f0c',
        externalId: undefined,
        name: 'Persona',
        required: false,
        type: 'taxonomy',
      },

      /**
       * Theme / Topic (rich_text)
       *
       * What we want to share with the audience? What is their takeaway, when they consume the content?
       */
      content_brief__theme___topic: {
        codename: 'content_brief__theme___topic',
        id: 'f3c6b71e-3101-4039-a9f4-cf1eaab8b8a3',
        externalId: undefined,
        name: 'Theme / Topic',
        required: false,
        type: 'rich_text',
      },

      /**
       * Motivation (rich_text)
       *
       * Why the given role cares about this content? why they want to consume it? What they want to achieve?
       */
      content_brief__motivation: {
        codename: 'content_brief__motivation',
        id: 'f09f77d8-0113-4d06-8212-55090ca2d629',
        externalId: undefined,
        name: 'Motivation',
        required: false,
        type: 'rich_text',
      },

      /**
       * Funnel stage (taxonomy)
       */
      content_brief__funnel_stage: {
        codename: 'content_brief__funnel_stage',
        id: '2fd3f27a-98b0-4d2a-8374-6b6a9af42ea7',
        externalId: undefined,
        name: 'Funnel stage',
        required: false,
        type: 'taxonomy',
      },

      /**
       * Transformation (rich_text)
       *
       * What do you expect the given role to change in their behavior when they consume the content? What are they supposed to differently from that moment on?
       */
      content_brief__transformation: {
        codename: 'content_brief__transformation',
        id: 'aaa2c3d6-92f4-4da4-91c4-2dcbdd4b2ef5',
        externalId: undefined,
        name: 'Transformation',
        required: false,
        type: 'rich_text',
      },

      /**
       * Business goal (rich_text)
       *
       * Why we creating this content? What are the expected measurable results?
       */
      content_brief__business_goal: {
        codename: 'content_brief__business_goal',
        id: 'd10b8d9f-ff06-48ae-904c-ce52c57d5aa6',
        externalId: undefined,
        name: 'Business goal',
        required: false,
        type: 'rich_text',
      },

      /**
       * Content outline (rich_text)
       *
       * Provide brief steps on how your content will evolve
       */
      content_brief__content_outline: {
        codename: 'content_brief__content_outline',
        id: '77aeb141-9f86-4233-8940-463de2f85f49',
        externalId: undefined,
        name: 'Content outline',
        required: false,
        type: 'rich_text',
      },
    },
  },
};
