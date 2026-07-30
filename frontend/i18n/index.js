import en from "./dictionaries/en";
import es from "./dictionaries/es";

export const DEFAULT_LANGUAGE = "es";
export const LANGUAGE_STORAGE_KEY = "whaid:lang";
export const SUPPORTED_LANGUAGES = ["es", "en"];

const dictionaries = {es, en};

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

export function getDictionary(language) {
  return dictionaries[normalizeLanguage(language)];
}

export function translate(dictionary, key) {
  const value = dictionary?.[key];
  if (value !== undefined) return value;
  if (process.env.NODE_ENV !== "production") console.error(`[i18n] Missing translation: ${key}`);
  return `[${key}]`;
}
