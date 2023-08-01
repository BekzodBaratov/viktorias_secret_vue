import { createApp } from "vue";
import { createPinia } from "pinia";

import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import i18n from "./plugins/i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Paginate from "vuejs-paginate-next";

import "./plugins/axios";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(i18n);
app.use(pinia);
app.use(Paginate);
app.use(Toast);

app.mount("#app");
