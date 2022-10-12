import { MigrationModule } from "@kontent-ai/cli";
import { ManagementClient } from "@kontent-ai/management-sdk";
import { updateWebinarTopicContentType } from "./lib/webinars";

const migration: MigrationModule = {
	order: 10,
	run: async (apiClient: ManagementClient) => {
		await updateWebinarTopicContentType(apiClient);
	},
};
export default migration;
