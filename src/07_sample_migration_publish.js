/**
* Publishes all Author and Blog items.
*
* Note: This migration shows that you can write the migrations directly in Javascript as well.
*/
const migration = {
    order: 7,
    run: async (apiClient) => {
        const authorLanguageVariantsResponse = await apiClient.listLanguageVariantsOfContentType()
            .byTypeCodename('author')
            .toPromise();

        for (const variant of authorLanguageVariantsResponse.data.items) {
            await apiClient.publishLanguageVariant()
                .byItemId(variant.item.id)
                .byLanguageId(variant.language.id)
                .withoutData()
                .toPromise();
        }

        const blogLanguageVariantsResponse = await apiClient.listLanguageVariantsOfContentType()
            .byTypeCodename('blog')
            .toPromise();

        for (const variant of blogLanguageVariantsResponse.data.items) {
            await apiClient.publishLanguageVariant()
                .byItemId(variant.item.id)
                .byLanguageId(variant.language.id)
                .withoutData()
                .toPromise();
        }
    },
};

module.exports = migration;
