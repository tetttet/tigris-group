import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Подключаем загрузку переводов из файлов
  .use(LanguageDetector) // Определяем язык пользователя
  .use(initReactI18next) // Интеграция с react-i18next
  .init({
    debug: true, // Включаем отладку
    lng: "en", // Язык по умолчанию
    fallbackLng: "en", // Резервный язык
    returnObjects: true, // Для возврата сложных объектов в переводах
    backend: {
      // Настройка путей к JSON-файлам
      loadPath: "/locales/{{lng}}/{{ns}}.json", // URL для загрузки переводов
    },
    ns: [
      "main.page",
      "header",
      "tigris.web.page",
      "footer.json",
      "events.json",
      "home.json",
      "about.json",
      "specialties.json",
      "features.json",
      "intermediary.json",
      "menu.json",
      "clients.json",
      "translation.json",
      "slogan.json",
      "med-footer.json",
      "chat.json",
    ], // Пространства имен, которые мы используем
    defaultNS: "main.page", // Пространство имен по умолчанию
    interpolation: {
      escapeValue: false, // Не экранировать значения
    },
  });

export default i18n;
