import { createI18n } from "vue-i18n";
import uz from "../languages/uz.json";
import ru from "../languages/ru.json";
import en from "../languages/en.json";

const locale = localStorage.getItem("lng") || "ru";

const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: "ru",
  silentFallbackWarn: true,
  globalInjection: true,
  messages: { uz, ru, en },
});

export default i18n;
