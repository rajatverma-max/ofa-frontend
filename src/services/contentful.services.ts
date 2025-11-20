import * as contentful from 'contentful';
import type {EntryCollection, EntrySkeletonType} from 'contentful';

import contentfulConfig, {
  contentfulPreviewConfig,
} from '@/lib/contentful.config';
import {ContentTypes} from '@/constants/keys';

type ContentfulClient = ReturnType<typeof contentful.createClient>;

export const getContentfulClient = (preview = false): ContentfulClient => {
  const config = preview ? contentfulPreviewConfig : contentfulConfig;
  return contentful.createClient(config);
};

export const getContentfulData = async <
  TEntry extends EntrySkeletonType = EntrySkeletonType
>(): Promise<EntryCollection<TEntry>> => {
  const client = getContentfulClient();
  try {
    return await client.getEntries({
      content_type: ContentTypes.pricing,
    });
  } catch (error) {
    console.error('Failed to fetch Contentful data', error);
    throw error;
  }
};
