import { MigrationModule } from '@kentico/kontent-cli';
import {
    ContentTypeModels,
    ManagementClient,
} from '@kentico/kontent-management';

/**
 * Adds new linked items element to content type Blog.
 * This element should link the blog with its author.
 */
const migration: MigrationModule = {
    order: 4,
    run: async (apiClient: ManagementClient) => {
        const modification: ContentTypeModels.IModifyContentTypeData[] = [
            {
                op: 'addInto',
                path: '/elements',
                value: {
                    name: 'Linked author',
                    codename: 'linked_author',
                    items_count_limit: 1,
                    type: 'modular_content',
                },
            },
            {
                op: 'addInto',
                path: '/elements/codename:linked_author/allowed_content_types',
                value: {
                    codename: 'author',
                },
            },
        ];

        await apiClient
            .modifyContentType()
            .byTypeCodename('blog')
            .withData(modification)
            .toPromise();
    },
};

export default migration;
