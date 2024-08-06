import { MigrationModule } from "@kontent-ai/data-ops";

import { itemWebSpotlightExtId } from "./constants/externalIds.js";
import { addItem } from "./utils/addItem.js";

const migration: MigrationModule = {
  order: 2,
  run: async client => {
    await client
      .activateWebSpotlight()
      .withData({
        root_type: null,
      })
      .toPromise();

    await addItem(client, {
      name: "Web Spotlight Item",
      codename: "web_spotlight_item",
      contentType: { codename: "web_spotlight_root" },
      externalId: itemWebSpotlightExtId,
      collection: { codename: "default" },
      languageCodename: "default",
      publish: true,
      data: () => ({ elements: [] }),
    });
  },
  rollback: async client => {
    await client
      .deleteContentItem()
      .byItemExternalId(itemWebSpotlightExtId)
      .toPromise();

    await client
      .deactivateWebSpotlight()
      .toPromise();
  },
};

export default migration;
