import { MigrationModule } from '@kentico/kontent-cli';
import { ContentTypeModels } from '@kentico/kontent-management';

const migration: MigrationModule = {
    order: 8,
    run: async (apiClient) => {
        const modification: ContentTypeModels.IModifyContentTypeData[] = [
            {
                op: 'addInto',
                path: '/elements/codename:page_blocks/allowed_content_types',
                value: {
                    codename: 'page_header',
                },
            },
        ];

        await apiClient
            .modifyContentType()
            .byTypeCodename('page')
            .withData(modification)
            .toPromise();
    },
};

export default migration;
