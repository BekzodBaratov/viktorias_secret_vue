import { createApp } from "vue";
import { createPinia } from "pinia";

import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import i18n from "./plugins/i18n";

import "./plugins/axios";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());
app.use(Toast);

app.mount("#app");
