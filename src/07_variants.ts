import { MigrationModule } from "@kontent-ai/data-ops";
import { LanguageVariantContracts, LanguageVariantElementsBuilder, ManagementClient } from "@kontent-ai/management-sdk";

import {
  itemExampleArticleExtId,
  itemJoeDoeExtId,
  taxonomyArticleTypeExtId,
  typeArticleExtIds,
  typeAuthorExtIds,
} from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 7,
  run: async client => {
    const authorData: LanguageVariantContracts.IUpsertLanguageVariantPostContract = {
      elements: [{
        element: { external_id: typeAuthorExtIds.elements.name },
        value: "Joe Doe",
      }],
    };

    const articleData: LanguageVariantContracts.IUpsertLanguageVariantPostContract = {
      elements: [
        {
          element: { external_id: typeArticleExtIds.elements.title },
          value: "Example Article",
        },
        {
          element: { external_id: typeArticleExtIds.elements.articleType },
          value: [{ external_id: taxonomyArticleTypeExtId.terms.blogPost }],
        },
        {
          element: { external_id: typeArticleExtIds.elements.author },
          value: [{ external_id: typeAuthorExtIds.entity }],
        },
        {
          element: { external_id: typeArticleExtIds.elements.content },
          value: "<p>Hello from Rich Text.</p>",
        },
      ],
    };

    await addItem(client, {
      name: "Joe Doe",
      externalId: itemJoeDoeExtId,
      codename: "joe_doe",
      contentType: { external_id: typeAuthorExtIds.entity },
      languageCodename: "default",
      collection: { codename: "default" },
      publish: true,
      data: () => authorData,
    });

    await addItem(client, {
      name: "Example Article",
      externalId: itemExampleArticleExtId,
      codename: "example_article",
      contentType: { external_id: typeArticleExtIds.entity },
      languageCodename: "default",
      collection: { codename: "default" },
      publish: true,
      data: () => articleData,
    });
  },
  rollback: async client => {
    await client
      .deleteContentItem()
      .byItemExternalId(itemExampleArticleExtId)
      .toPromise();

    await client
      .deleteContentItem()
      .byItemExternalId(itemJoeDoeExtId)
      .toPromise();
  },
};

type AddItemParams = Readonly<{
  name: string;
  externalId: string;
  codename: string;
  contentType: Readonly<{ codename: string } | { external_id: string }>;
  languageCodename: string;
  collection: Readonly<{ codename: string } | { external_id: string }>;
  publish?: boolean;
  data: (builder: LanguageVariantElementsBuilder) => LanguageVariantContracts.IUpsertLanguageVariantPostContract;
}>;

export const addItem = async (client: ManagementClient, params: AddItemParams) => {
  await client
    .addContentItem()
    .withData({
      name: params.name,
      type: params.contentType,
      codename: params.codename,
      collection: params.collection,
      external_id: params.externalId,
    })
    .toPromise();

  await client
    .upsertLanguageVariant()
    .byItemExternalId(params.externalId)
    .byLanguageCodename(params.languageCodename)
    .withData(params.data)
    .toPromise();

  if (params.publish) {
    await client
      .publishLanguageVariant()
      .byItemExternalId(params.externalId)
      .byLanguageCodename(params.languageCodename)
      .withoutData()
      .toPromise();
  }
};

export default migration;
