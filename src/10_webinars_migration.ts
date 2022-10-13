import { MigrationModule } from "@kontent-ai/cli";
import { ManagementClient } from "@kontent-ai/management-sdk";
import { updateWebinarsPageContentType } from "./lib/webinars";

const migration: MigrationModule = {
	order: 10,
	run: async (apiClient: ManagementClient) => {
		// This is a sample method that updates the WebinarsPage content type, more methods can be found in the lib folder
		await updateWebinarsPageContentType(apiClient);
	},
};
export default migration;
