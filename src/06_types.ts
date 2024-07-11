import { MigrationModule } from "@kontent-ai/data-ops";
import { ContentTypeModels } from "@kontent-ai/management-sdk";

import {
  snippetMetadataExtIds,
  taxonomyArticleTypeExtId,
  typeArticleExtIds,
  typeAuthorExtIds,
} from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 6,
  run: async client => {
    const authorType: ContentTypeModels.IAddContentTypeData = {
      name: "Author",
      external_id: typeAuthorExtIds.entity,
      elements: [
        {
          name: "Name",
          type: "text",
          external_id: typeAuthorExtIds.elements.name,
        },
      ],
    };

    const articleTypeData: ContentTypeModels.IAddContentTypeData = {
      name: "Article",
      external_id: typeArticleExtIds.entity,
      content_groups: [
        {
          name: "content",
          external_id: typeArticleExtIds.contentGroups.content,
        },
        {
          name: "metadata",
          external_id: typeArticleExtIds.contentGroups.metadata,
        },
      ],
      elements: [
        {
          name: "Title",
          type: "text",
          content_group: { external_id: typeArticleExtIds.contentGroups.content },
          external_id: typeArticleExtIds.elements.title,
        },
        {
          name: "Article type",
          type: "taxonomy",
          taxonomy_group: { external_id: taxonomyArticleTypeExtId.taxonomyGroup },
          content_group: { external_id: typeArticleExtIds.contentGroups.content },
          external_id: typeArticleExtIds.elements.articleType,
        },
        {
          name: "Content",
          type: "rich_text",
          content_group: { external_id: typeArticleExtIds.contentGroups.content },
          external_id: typeArticleExtIds.elements.content,
        },
        {
          name: "Author",
          type: "modular_content",
          allowed_content_types: [{ external_id: typeAuthorExtIds.entity }],
          content_group: { external_id: typeArticleExtIds.contentGroups.content },
          external_id: typeArticleExtIds.elements.author,
        },
        {
          type: "snippet",
          snippet: { external_id: snippetMetadataExtIds.entity },
          content_group: { external_id: typeArticleExtIds.contentGroups.metadata },
          external_id: typeArticleExtIds.elements.metadata,
        },
      ],
    };

    await client
      .addContentType()
      .withData(() => authorType)
      .toPromise();

    await client
      .addContentType()
      .withData(() => articleTypeData)
      .toPromise();
  },
  rollback: async client => {
    // Using Catch to be able to rollback even partial migrations.
    await client
      .deleteContentType()
      .byTypeExternalId(typeAuthorExtIds.entity)
      .toPromise()
      .catch(e => console.log(`Unsucessful deletion of type Author: ${e}`));

    await client
      .deleteContentType()
      .byTypeExternalId(typeArticleExtIds.entity)
      .toPromise()
      .catch(e => console.log(`Unsucessful deletion of type Author: ${e}`));
  },
};

export default migration;
