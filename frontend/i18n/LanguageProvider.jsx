"use client";

import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {DEFAULT_LANGUAGE, getDictionary, LANGUAGE_STORAGE_KEY, normalizeLanguage, translate} from "./index";

export const LanguageContext = createContext(null);

export default function LanguageProvider({children}) {
  const [language, updateLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const storedLanguage = normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
    updateLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;
    document.documentElement.dataset.lang = storedLanguage;
  }, []);

  const setLanguage = useCallback((nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);
    updateLanguage(normalized);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
    document.documentElement.lang = normalized;
    document.documentElement.dataset.lang = normalized;
  }, []);

  const dictionary = useMemo(() => getDictionary(language), [language]);
  const t = useCallback((key) => translate(dictionary, key), [dictionary]);
  const value = useMemo(() => ({language, setLanguage, dictionary, t}), [language, setLanguage, dictionary, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
