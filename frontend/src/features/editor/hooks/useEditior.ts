import { useState } from "react";
import { defaultLanguage, languages } from "../config/languages";
import type { Language } from "../types/editor.types";

export const useEditor = (starterCode?: string) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);
  const [code, setCode] = useState<string>(
    starterCode ?? defaultLanguage.defaultCode,
  );

  const handleLanguageChange = (languageId: string) => {
    const language: Language = languages.find((l) => l.id === languageId);
    if (!language) return;
    setSelectedLanguage(language);
    setCode(language.defaultCode);
  };

  const handleCodeChange = (value: string | undefined) => {
    setCode(value ?? "");
  };

  return {
    code,
    selectedLanguage,
    languages,
    handleLanguageChange,
    handleCodeChange,
  };
};
