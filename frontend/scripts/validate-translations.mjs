import es from '../i18n/dictionaries/es.js';
import en from '../i18n/dictionaries/en.js';

const dictionaries = {es, en};
const errors = [];

function collectKeys(value, prefix = '') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return [prefix];
  return Object.entries(value).flatMap(([key, child]) => collectKeys(child, prefix ? `${prefix}.${key}` : key));
}

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  for (const key of collectKeys(dictionary)) {
    const value = key.split('.').reduce((current, part) => current?.[part], dictionary);
    if (typeof value === 'string' && value.trim() === '') errors.push(`${locale}:${key} is empty`);
    if (value == null) errors.push(`${locale}:${key} is nullish`);
  }
}

const esKeys = collectKeys(es).sort();
const enKeys = collectKeys(en).sort();
const missingInEn = esKeys.filter((key) => !enKeys.includes(key));
const missingInEs = enKeys.filter((key) => !esKeys.includes(key));

missingInEn.forEach((key) => errors.push(`Missing in en: ${key}`));
missingInEs.forEach((key) => errors.push(`Missing in es: ${key}`));

if (errors.length) {
  console.error('Translation validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Translation validation passed (${esKeys.length} keys per locale).`);
