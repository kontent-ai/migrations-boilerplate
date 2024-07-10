import { MigrationModule } from "@kontent-ai/data-ops";
import {ContentTypeModels } from "@kontent-ai/management-sdk";

/**
 * Removes the old text element representing author.
 *
 * Note: This final cleanup is recommended but is not strictly necessary.
 */
const migration: MigrationModule = {
  order: 6,
  run: async (apiClient) => {
    const modification: ContentTypeModels.IModifyContentTypeData[] = [
      {
        op: "remove",
        path: "/elements/codename:author",
        value: "",
      },
    ];

    await apiClient
      .modifyContentType()
      .byTypeCodename("blog")
      .withData(modification)
      .toPromise();
  },
};

export default migration;
