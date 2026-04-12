import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: "en", label: "EN", nativeLabel: "English", flag: "🇬🇧" },
  { code: "hi", label: "हि", nativeLabel: "हिन्दी", flag: "🇮🇳" },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
