import KontentService from './services/KontentService';
import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';
// @ts-ignore
import { DRAFT, PUBLISHED } from './constants';
import { BubbleModel, contentTypes } from './models';
import { getElementsParamCodename } from './utils/kontentUtils';

const migration: MigrationModule = {
  order: 14,
  run: async (apiClient: ManagementClient) => {
    try {
      const bubblesWithoutText = (
        await KontentService.Instance(true)
          .deliveryClient.items<BubbleModel>()
          .type(contentTypes.bubble.codename)
          .emptyFilter(
            getElementsParamCodename(
              contentTypes.bubble.elements.link_text.codename
            )
          )
          .toPromise()
      ).data.items;

      for await (const bubble of bubblesWithoutText) {
        // Item in draft state
        if (bubble.system.workflowStep === DRAFT) {
          await apiClient
            .upsertLanguageVariant()
            .byItemId(bubble.system.id)
            .byLanguageCodename('default')
            // @ts-ignore
            .withData((builder) => [
              builder.customElement({
                element: { codename: 'link_text' },
                value: 'Learn more',
              }),
            ])
            .toPromise()
        }
        // Item in published state
        if (bubble.system.workflowStep === PUBLISHED) {
          await apiClient
            .createNewVersionOfLanguageVariant()
            .byItemId(bubble.system.id)
            .byLanguageCodename('default')
            .toPromise();

          await apiClient
            .upsertLanguageVariant()
            .byItemId(bubble.system.id)
            .byLanguageCodename('default')
            // @ts-ignore
            .withData((builder) => [
              builder.customElement({
                element: { codename: 'link_text' },
                value: 'Learn more',
              }),
            ])
            .toPromise()

          await apiClient
            .publishLanguageVariant()
            .byItemId(bubble.system.id)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise();
        }
      }
    } catch (error) {
      throw new Error(`There's been an error: ${error.message}`);
    }
  },
};
export default migration;
