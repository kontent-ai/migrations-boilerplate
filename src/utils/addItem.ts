import { LanguageVariantContracts, LanguageVariantElementsBuilder, ManagementClient } from "@kontent-ai/management-sdk";

export type AddItemParams = Readonly<{
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
