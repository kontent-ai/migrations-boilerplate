import { MigrationModule } from "@kontent-ai/data-ops";

import { itemWebSpotlightExtId } from "./constants/externalIds.js";
import { addItem } from "./utils/addItem.js";
import { throwErr } from "./utils/err.js";

const migration: MigrationModule = {
  order: 2,
  run: async client => {
    const webSpotlightResult = await client
      .activateWebSpotlight()
      .withData({
        root_type: null,
      })
      .toPromise();

    await addItem(client, {
      name: "Web Spotlight Item",
      codename: "web_spotlight_item",
      contentType: {
        id: webSpotlightResult.rawData.root_type?.id ?? throwErr("Could not obtain the web spotlight root type id."),
      },
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
