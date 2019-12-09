import { MigrationModule } from "@kentico/kontent-cli";

interface IAuthorsMap {
    author: string;
    itemId: string;
}

/**
* Fetches all Blog items and extracts its authors.
* Creates an Author item for every unique author.
* Adds the new/existing Author item to the Blog item.
*
* Note: Your website/application should switch to using the new element at this point.
*/
const migration: MigrationModule = {
    order: 5,
    run: async (apiClient) => {
        const contentTypeResponse = await apiClient.viewContentType()
            .byTypeCodename("blog")
            .toPromise();

        const authorElementId = contentTypeResponse.data.elements.filter(r => r.codename === "author")[0].id;

        // Get all Blog language variants
        const blogVariantsResponse = await apiClient.listLanguageVariantsOfContentType()
            .byTypeCodename("blog")
            .toPromise();

        const blogLanguageVariants = blogVariantsResponse.data.variants;
        const existingAuthors: IAuthorsMap[] = [];

        for (const blogLanguageVariant of blogLanguageVariants) {
            // Find the value of the old author element
            const author = blogLanguageVariant.elements.find(e => e.element.id === authorElementId)!.value.toString();

            // If the Author item doesn't exist -> create
            if (!existingAuthors.find(x => x.author == author)) {
                const authorItem = await apiClient.addContentItem()
                .withData({
                    name: author,
                    type: {
                        codename: "author",
                    }
                })
                .toPromise();

                await apiClient.upsertLanguageVariant()
                .byItemId(authorItem.data.id)
                .byLanguageCodename("default")
                .withElements(
                    [
                        {
                            element: {
                                codename: "name",
                            },
                            value: author,
                        },
                    ])
                .toPromise();

                existingAuthors.push({ author: author, itemId: authorItem.data.id });
            }

            // Update the Blog item
            await apiClient.upsertLanguageVariant()
                .byItemId(blogLanguageVariant.item.id!)
                .byLanguageCodename("default")
                .withElements(
                    [
                        {
                            element: {
                                codename: "linked_author",
                            },
                            value: [{
                                id: existingAuthors.find(x => x.author == author)!.itemId,
                            }]
                        },
                    ])
                .toPromise();
        }
    },
};

export default migration;
