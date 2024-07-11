import { MigrationModule } from "@kontent-ai/data-ops";
import { ContentTypeSnippetModels } from "@kontent-ai/management-sdk";

import { snippetMetadataExtIds } from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 5,
  run: async client => {
    const snippetData: ContentTypeSnippetModels.IAddContentTypeSnippetData = {
      name: "Metadata",
      external_id: snippetMetadataExtIds.entity,
      elements: [
        {
          name: "Title",
          type: "text",
          external_id: snippetMetadataExtIds.elements.title,
        },
        {
          name: "Description",
          type: "text",
          external_id: snippetMetadataExtIds.elements.description,
        },
      ],
    };

    await client
      .addContentTypeSnippet()
      .withData(() => snippetData)
      .toPromise();
  },
  rollback: async client => {
    await client
      .deleteContentTypeSnippet()
      .byTypeExternalId(snippetMetadataExtIds.entity)
      .toPromise();
  },
};

export default migration;
