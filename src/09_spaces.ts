import { MigrationModule } from "@kontent-ai/data-ops";

import { itemWebSpotlightExtId } from "./constants/externalIds.js";

const spaceCodename = "ficto_space";

const migration: MigrationModule = {
  order: 9,
  run: async client => {
    await client
      .addSpace()
      .withData({
        name: "Ficto Space",
        web_spotlight_root_item: { external_id: itemWebSpotlightExtId },
        codename: spaceCodename,
      })
      .toPromise();
  },
  rollback: async client => {
    await client
      .deleteSpace()
      .bySpaceCodename(spaceCodename)
      .toPromise();
  },
};

export default migration;
