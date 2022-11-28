import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';
import { addIndustryOptionToPageType, changePageTypeToIndustry } from './lib/industryPages';

const migration: MigrationModule = {
  order: 11,
  run: async (apiClient: ManagementClient) => {
    await addIndustryOptionToPageType(apiClient);
    await changePageTypeToIndustry(apiClient);
  },
};
export default migration;
