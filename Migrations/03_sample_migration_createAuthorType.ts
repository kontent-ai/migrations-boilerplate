import { MigrationModule } from '@kentico/kontent-cli';
import {
    ContentTypeElementsBuilder,
    ContentTypeModels,
} from '@kentico/kontent-management';

/**
 * Creates new content type called Author.
 * This content type has two elements: name and Twitter handle.
 *
 * Note: This starts the actual migration process.
 */
const migration: MigrationModule = {
    order: 3,
    run: async (apiClient) => {
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
