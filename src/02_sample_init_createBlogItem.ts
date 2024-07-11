import { MigrationModule } from "@kontent-ai/data-ops";

/**
 * Creates a sample content item of type Blog.
 */
const migration: MigrationModule = {
  order: 2,
  run: async (apiClient) => {
    // Create content item
    const itemResponse = await apiClient
      .addContentItem()
      .withData({
        name: "About coffee",
        type: {
          codename: "blog",
        },
      })
      .toPromise();

    // Create language variant in default language
    await apiClient
      .upsertLanguageVariant()
      .byItemId(itemResponse.data.id)
      .byLanguageCodename("default")
      .withData((builder) => {
        return {
          elements: [
            builder.textElement({
              element: {
                codename: "title",
              },
              value: "About coffee",
            }),
            builder.textElement({
              element: {
                codename: "author",
              },
              value: "Coffee geek",
            }),
            builder.textElement({
              element: {
                codename: "text",
              },
              value:
                "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffee species.",
            }),
          ],
        };
      })
      .toPromise();
  },
};

export default migration;
