import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerKa from "./ka/header.json";
import headerEn from "./en/header.json";
import footerKa from "./ka/footer.json";
import footerEn from "./en/footer.json";
import aboutKa from "./ka/about.json";
import aboutEn from "./en/about.json";

const options = {
  order: ["path"],
  lookupFromPathIndex: 0,
};
const lngDetector = new LanguageDetector();
const getInitialLanguage = () => {
  const pathLanguage = window.location.pathname.split("/")[1] || "ka";
  return pathLanguage === "ka" ? "ka" : "en";
};

i18n
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: {
          header: headerKa,
          footer: footerKa,
          about: aboutKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          about: aboutEn,
        },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
