import { MigrationModule } from "@kontent-ai/data-ops";

const migration: MigrationModule = {
  order: 2,
  run: async client => {
    client as never;
    // TODO:
  },
  rollback: async client => {
    client as never;
    // TODO:
  },
};

export default migration;
