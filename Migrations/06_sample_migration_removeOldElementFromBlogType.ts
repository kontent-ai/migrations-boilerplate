import { MigrationModule } from '@kentico/kontent-cli';
import { ContentTypeModels } from '@kentico/kontent-management';

/**
 * Removes the old text element representing author.
 *
 * Note: This final cleanup is recommended but is not strictly necessary.
 */
const migration: MigrationModule = {
    order: 6,
    run: async apiClient => {
        const modification: ContentTypeModels.IModifyContentTypeData[] = [
            {
                op: 'remove',
                path: '/elements/codename:author',
                value: ''
            }
        ];

        await apiClient
            .modifyContentType()
            .byTypeCodename('blog')
            .withData(modification)
            .toPromise();
    }
};

export default migration;
