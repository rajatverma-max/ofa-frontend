import {contentfulKeys} from '@/constants/keys';

const {SPACE_ID, ACCESS_TOKEN, ENVIRONMENT_KEY, PREVIEW_HOST} = contentfulKeys;

const contentfulConfig = {
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
};

export const contentfulPreviewConfig = {
  host: PREVIEW_HOST,
  space: SPACE_ID,
  environment: ENVIRONMENT_KEY,
  accessToken: ACCESS_TOKEN,
};

export default contentfulConfig;
