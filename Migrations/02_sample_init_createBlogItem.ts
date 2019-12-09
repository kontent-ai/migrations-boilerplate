import { MigrationModule } from "@kentico/kontent-cli";

/**
* Creates a sample content item of type Blog.
*/
const migration: MigrationModule = {
    order: 2,
    run: async (apiClient) => {
        // Create content item
        const itemResponse = await apiClient.addContentItem()
            .withData({
                name: "About coffee",
                type: {
                    codename: "blog",
                }
            })
            .toPromise();

        // Create language variant in default language
        await apiClient.upsertLanguageVariant()
            .byItemId(itemResponse.data.id)
            .byLanguageCodename("default")
            .withElements(
                [
                    {
                        element: {
                            codename: "title",
                        },
                        value: "About coffee",
                    },
                    {
                        element: {
                            codename: "author",
                        },
                        value: "Coffee geek",
                    },
                    {
                        element: {
                            codename: "text",
                        },
                        value: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
                    }
                ])
            .toPromise();
    },
};

export default migration;
