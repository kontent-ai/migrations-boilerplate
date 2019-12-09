import { MigrationModule } from "@kentico/kontent-cli";
import {
    ContentTypeElementsBuilder,
    ContentTypeModels,
} from "@kentico/kontent-management";

/**
* Creates content type called Blog.
* This content type has three text elements: title, author and text.
*/
const migration: MigrationModule = {
    order: 1,
    run: async (apiClient) => {
        await apiClient.addContentType()
            .withData(BuildBlogPostTypeData)
            .toPromise();
    },
};

const BuildBlogPostTypeData = (builder: ContentTypeElementsBuilder): ContentTypeModels.IAddContentTypeData => {
    return {
        name: "Blog",
        codename: "blog",
        elements: [
            builder.textElement(
                {
                    name: "Title",
                    codename: "title",
                    type: "text",
                }),
            builder.textElement(
                {
                    name: "Author",
                    codename: "author",
                    type: "text",
                }),
            builder.textElement(
                {
                    name: "Text",
                    codename: "text",
                    type: "text",
                })
        ]
    };
};

export default migration;
