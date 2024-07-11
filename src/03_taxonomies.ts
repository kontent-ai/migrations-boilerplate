import { MigrationModule } from "@kontent-ai/data-ops";
import { TaxonomyModels } from "@kontent-ai/management-sdk";

import { taxonomyArticleTypeExtId } from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 3,
  run: async client => {
    const taxonomyData: TaxonomyModels.IAddTaxonomyRequestModel = {
      name: "Article Type",
      codename: "article_type",
      external_id: taxonomyArticleTypeExtId.taxonomyGroup,
      terms: [
        {
          name: "Blog Post",
          codename: "blog_post",
          external_id: taxonomyArticleTypeExtId.terms.blogPost,
          terms: [],
        },
        {
          name: "news",
          codename: "news",
          external_id: taxonomyArticleTypeExtId.terms.news,
          terms: [],
        },
      ],
    };

    await client
      .addTaxonomy()
      .withData(taxonomyData)
      .toPromise();
  },
  rollback: async client => {
    await client
      .deleteTaxonomy()
      .byTaxonomyExternalId(taxonomyArticleTypeExtId.taxonomyGroup)
      .toPromise();
  },
};

export default migration;
