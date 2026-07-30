"use client";

import useLanguage from "./useLanguage";

export default function TranslatedText({i18nKey}) {
  const {t} = useLanguage();
  return t(i18nKey);
}
