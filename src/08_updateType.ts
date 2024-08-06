import { MigrationModule } from "@kontent-ai/data-ops";

import { typeAuthorExtIds } from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 8,
  run: async client => {
    await client
      .modifyContentType()
      .byTypeExternalId(typeAuthorExtIds.entity)
      .withData([
        {
          op: "addInto",
          path: "/elements",
          value: {
            name: "Last Name",
            type: "text",
            external_id: typeAuthorExtIds.elements.lastName,
          },
        },
      ])
      .toPromise();
  },
  rollback: async client => {
    // Using Catch to be able to rollback even partial migrations.
    await client
      .modifyContentType()
      .byTypeExternalId(typeAuthorExtIds.entity)
      .withData([{
        op: "remove",
        path: `/elements/external_id:${typeAuthorExtIds.elements.lastName}`,
      }])
      .toPromise();
  },
};

export default migration;
