import { MigrationModule } from '@kontent-ai/cli';
import {
    ContentTypeElementsBuilder,
    ContentTypeModels,
    ManagementClient,
} from '@kontent-ai/management-sdk';

/**
 * Creates new content type called Author.
 * This content type has two elements: name and Twitter handle.
 *
 * Note: This starts the actual migration process.
 */
const migration: MigrationModule = {
    order: 3,
    run: async (apiClient: ManagementClient) => {
        await apiClient
            .addContentType()
            .withData(BuildAuthorTypeData)
            .toPromise();
    },
};

const BuildAuthorTypeData = (
    builder: ContentTypeElementsBuilder
): ContentTypeModels.IAddContentTypeData => {
    return {
        name: 'Author',
        codename: 'author',
        elements: [
            builder.textElement({
                name: 'Name',
                codename: 'name',
                type: 'text',
            }),
            builder.textElement({
                name: 'Twitter handle',
                codename: 'twitter_handle',
                type: 'text',
            }),
        ],
    };
};

export default migration;
