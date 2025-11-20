export type ContentfulKeys = {
  SPACE_ID: string;
  ACCESS_TOKEN: string;
  //   ENVIRONMENT_KEY: string;
  PREVIEW_HOST?: string;
};

function requiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const contentfulKeys: ContentfulKeys = {
  SPACE_ID: requiredEnv('NEXT_PUBLIC_CONTENTFUL_SPACE_ID'),
  ACCESS_TOKEN: requiredEnv('NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN'),
  //   ENVIRONMENT_KEY: requiredEnv('NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_KEY'),
  PREVIEW_HOST: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_HOST,
};

export const ContentTypes = {
  pricing: 'pricingPage',
} as const;
