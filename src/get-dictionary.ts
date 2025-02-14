import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export type Dictionary = Awaited<
  ReturnType<(typeof dictionaries)[keyof typeof dictionaries]>
>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
