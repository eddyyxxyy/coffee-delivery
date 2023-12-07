import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    if (typeof window !== "undefined") {
      i18n.on("languageChanged", function (lang) {
        document.documentElement.lang = lang;
      });
    }
  })
  .catch((error) => console.error("Failed to initialize i18next:", error));

export default i18n;
