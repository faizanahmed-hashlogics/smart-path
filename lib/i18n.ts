import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import translation resources
import en from "@/locales/en/common.json"
import ar from "@/locales/ar/common.json"

const resources = {
  en: { translation: en },
  ar: { translation: ar },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    // We can add more options if needed
  })
}

export default i18n
