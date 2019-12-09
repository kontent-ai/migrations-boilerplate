import { MigrationModule } from "@kentico/kontent-cli";
import {
    ContentTypeModels,
    ElementModels,
} from "@kentico/kontent-management";

/**
* Adds new linked items element to content type Blog.
* This element should link the blog with its author.
*/
const migration: MigrationModule = {
    order: 4,
    run: async (apiClient) => {
        const modification: ContentTypeModels.IModifyContentTypeData[] = [
            {
                op: "addInto",
                path: "/elements",
                value: {
                    name: "Linked author",
                    codename: "linked_author",
                    items_count_limit: 1,
                    type: ElementModels.ElementType.modularContent,
                },
            }
        ];

        await apiClient.modifyContentType()
            .byTypeCodename("blog")
            .withData(modification)
            .toPromise();
    },
};

export default migration;
