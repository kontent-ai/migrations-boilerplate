import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';
// @ts-ignore
import {
  WORKFLOW_DRAFT_ID,
  WORKFLOW_PUBLISHED_ID,
  WORKFLOW_READY_FOR_PUBLISHING_ID,
} from './constants';

const VIDEO_SCHEMA_FIELD_ID = '2df33c2b-7147-3afd-a1fb-bad962d2dc24';

// @ts-ignore
const fetchVideoMetadata = async (elementValue: any) => {
  if (typeof elementValue !== 'string' || !elementValue) {
    return;
  }

  const videoId = elementValue;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDefU4N4Rn2h9WRwIoQnLmkgO3p1ZGt6tQ&part=snippet,contentDetails,statistics`,
      {
        mode: 'cors',
      }
    );

    const data = await response.json();

    if ((data as any).items.length === 0) {
      console.error('Youtube API returned 0 items for video ID ' + videoId);

      return '';
    }

    const videoObj = (data as any).items[0];

    // handle date format
    const dateObj = new Date(videoObj.snippet.publishedAt);

    const year = dateObj.getUTCFullYear();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();

    // Pad the month and day with leading zeros if necessary
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');

    const finalSchemaObject = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: videoObj.snippet.title,
      description: videoObj.snippet.description,
      duration: videoObj.contentDetails.duration,
      uploadDate: `${year}-${formattedMonth}-${formattedDay}`,
      thumbnailUrl: videoObj.snippet.thumbnails.high.url,
      contentUrl: videoId
        ? `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`
        : '',
      embedUrl: videoId
        ? `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`
        : '',
    };

    return JSON.stringify(finalSchemaObject);
  } catch (error) {
    console.error('Error:', error);
  }
};

const migration: MigrationModule = {
  order: 13,
  run: async (apiClient: ManagementClient) => {
    try {
      const allVideos = await apiClient
        .listLanguageVariantsOfContentType()
        .byTypeCodename('content_item___youtube_video')
        .toPromise();

      for await (const video of allVideos.data.items) {
        const videoSchemaField = video.elements.find(
          (element) => element.element.id === VIDEO_SCHEMA_FIELD_ID
        );

        if (videoSchemaField.value.toString().length > 0) {
          const videoData = await fetchVideoMetadata(
            videoSchemaField.value.toString()
          );

          // TODO: If in DRAFT do this
          if (video.workflowStep.id === WORKFLOW_DRAFT_ID) {
            await apiClient
              .upsertLanguageVariant()
              .byItemId(video.item.id)
              .byLanguageId(video.language.id)
              // @ts-ignore
              .withData((builder) => [
                builder.customElement({
                  element: { codename: 'video_schema_org' },
                  value: videoData,
                }),
              ])
              .toPromise()
          }

          // TODO: If PUBLISHED do this
          if (video.workflowStep.id === WORKFLOW_PUBLISHED_ID) {
            await apiClient
              .createNewVersionOfLanguageVariant()
              .byItemId(video.item.id)
              .byLanguageId(video.language.id)
              .toPromise();

            await apiClient
              .upsertLanguageVariant()
              .byItemId(video.item.id)
              .byLanguageId(video.language.id)
              // @ts-ignore
              .withData((builder) => [
                builder.customElement({
                  element: { codename: 'video_schema_org' },
                  value: videoData,
                }),
              ])
              .toPromise()

            // TODO: Move element to Ready for publish workflow step
            await apiClient
              .changeWorkflowStepOfLanguageVariant()
              .byItemId(video.item.id)
              .byLanguageId(video.language.id)
              .byWorkflowStepId(WORKFLOW_READY_FOR_PUBLISHING_ID)
              .toPromise();

            await apiClient
              .publishLanguageVariant()
              .byItemId(video.item.id)
              .byLanguageId(video.language.id)
              .withoutData()
              .toPromise();
          }
        }
      }
    } catch (error) {
      throw new Error(`There's been an error: ${error.message}`);
    }
  },
};
export default migration;
