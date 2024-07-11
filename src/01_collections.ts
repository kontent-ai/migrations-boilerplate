import { MigrationModule } from "@kontent-ai/data-ops";
import { CollectionModels } from "@kontent-ai/management-sdk";

import { collectionHealthTechExtId } from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 1,
  run: async client => {
    const setCollectionsData: CollectionModels.ISetCollectionData[] = [
      {
        op: "addInto",
        value: {
          name: "healthtech",
          codename: "healthtech",
          externalId: collectionHealthTechExtId,
        },
      },
      {
        op: "replace",
        reference: { codename: "default" },
        property_name: "name",
        value: "common",
      },
    ];

    await client
      .setCollections()
      .withData(setCollectionsData)
      .toPromise();
  },
  rollback: async client => {
    const setCollectionsData: CollectionModels.ISetCollectionData[] = [
      {
        op: "remove",
        reference: { codename: "healthtech" },
      } as unknown as CollectionModels.ISetCollectionData,
      {
        op: "replace",
        reference: { codename: "default" },
        property_name: "name",
        value: "default",
      },
    ];

    await client
      .setCollections()
      .withData(setCollectionsData)
      .toPromise();
  },
};

export default migration;
