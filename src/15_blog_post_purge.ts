import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
//@ts-ignore
import { BlogPostModel, contentTypeSnippets, contentTypes } from './models'
import KontentService from './services/KontentService'
import { delay } from './lib/utils'

const migration: MigrationModule = {
  order: 15,
  run: async (apiClient: ManagementClient) => {
    await apiClient
      .modifyContentType()
      .byTypeCodename(contentTypes.blog_post.codename)
      .withData([
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.release_projects.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.topic.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.image_behavior.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.display_on_sites.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.project_name.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.project_date.codename}`,
        },
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.blog_post.elements.header_image_2x.codename}`,
        },
        {
          op: 'remove',
          path: `/content_groups/codename:content_brief`,
        },
      ])
      .toPromise()

    await apiClient
      .modifyContentType()
      .byTypeCodename(contentTypes.blog_post.codename)
      .withData([
        {
          op: 'addInto',
          path: '/content_groups',
          value: {
            name: 'Metadata',
            codename: 'metadata',
          },
        },
        {
          op: 'addInto',
          path: `/elements`,
          value: {
            type: 'snippet',
            snippet: {
              codename: contentTypeSnippets.metadata.codename,
            },
            content_group: {
              codename: 'metadata',
            },
          },
        },
      ])
      .toPromise()

    const publishedBlogPosts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .equalsFilter('system.workflow_step', 'published')
        .toPromise()
    ).data.items

    async function processPost(post: BlogPostModel) {
      const postMAPI = await apiClient
        .viewLanguageVariant()
        .byItemCodename(post.system.codename)
        .byLanguageCodename('default')
        .toPromise()

      const allAssetFields = postMAPI.data.elements.filter(
        (element) =>
          Array.isArray(element['_raw'].value) &&
          element['_raw'].value.length > 0 &&
          element['_raw'].value[0].hasOwnProperty('renditions')
      )

      const metadataImage = allAssetFields[allAssetFields.length - 1]

      await apiClient
        .createNewVersionOfLanguageVariant()
        .byItemCodename(post.system.codename)
        .byLanguageCodename('default')
        .toPromise()

      await apiClient
        .upsertLanguageVariant()
        .byItemCodename(post.system.codename)
        .byLanguageCodename('default')
        .withData((builder) => {
          return {
            elements: [
              builder.textElement({
                element: {
                  codename: 'metadata__metadata_title',
                },
                value: post.elements.metadataTitle.value,
              }),
              builder.textElement({
                element: {
                  codename: 'metadata__metadata_description',
                },
                value: post.elements.metadataDescription.value,
              }),
              builder.assetElement({
                element: {
                  codename: 'metadata__metadata_image',
                },
                value: [{ id: metadataImage.value[0].id }],
              }),
            ],
          }
        })
        .toPromise()

      await apiClient
        .publishLanguageVariant()
        .byItemCodename(post.system.codename)
        .byLanguageCodename('default')
        .withoutData()
        .toPromise()
    }

    async function processInBatches(
      posts: BlogPostModel[],
      batchSize: number,
      delayTime: number
    ) {
      for (let i = 0; i < posts.length; i += batchSize) {
        const batch = posts.slice(i, i + batchSize)
        await Promise.all(batch.map(processPost))
        if (i + batchSize < posts.length) {
          await delay(delayTime)
        }
      }
    }

    await processInBatches(publishedBlogPosts, 10, 1000) // 10 requests per second
  },
}

export default migration
