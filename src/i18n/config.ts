export const LOCALE_COOKIE = 'locale';
export const locales = ['lv', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'lv';

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && locales.includes(value as Locale);
}

export function getNextLocale(current: Locale): Locale {
  const index = locales.indexOf(current);
  const nextIndex = (index + 1) % locales.length;
  return locales[nextIndex];
}
