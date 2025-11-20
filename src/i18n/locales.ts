export const supportedLocales = ['en', 'fr', 'de', 'es'] as const;
export type AppLocale = (typeof supportedLocales)[number];
export const defaultLocale: AppLocale = 'en';
