import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = ['en', 'fr', 'ar'];

const getValueByPath = (source, path) =>
  path.split('.').reduce((current, key) => (current && current[key] !== undefined ? current[key] : undefined), source);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('ora-language') || 'en';
  });

  const setLanguage = (nextLanguage) => {
    const resolved = SUPPORTED_LANGUAGES.includes(nextLanguage) ? nextLanguage : 'en';
    setLanguageState(resolved);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('ora-language', language);
    }

    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.classList.remove('lang-en', 'lang-fr', 'lang-ar');
    document.documentElement.classList.add(`lang-${language}`);
  }, [language]);

  const value = useMemo(() => {
    const t = (path, replacements = {}) => {
      const fallback = getValueByPath(translations.en, path);
      const found = getValueByPath(translations[language] || {}, path);
      const resolved = found ?? fallback ?? path;

      if (typeof resolved !== 'string') return resolved;

      return Object.entries(replacements).reduce(
        (result, [key, replacement]) => result.replaceAll(`{${key}}`, replacement),
        resolved
      );
    };

    return {
      language,
      setLanguage,
      t,
      supportsLanguage: (code) => SUPPORTED_LANGUAGES.includes(code),
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
};
