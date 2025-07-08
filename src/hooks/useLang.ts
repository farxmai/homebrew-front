import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
    // window.location.reload(); // Reload to apply language change
  };

  return { t, lang: i18n.language, toggleLanguage };
};
