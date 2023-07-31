import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BasketView from "../views/BasketView.vue";
import CategoryView from "../views/CategoryView.vue";
import ContactView from "../views/ContactView.vue";
import FilterView from "../views/FilterView.vue";
import LoginView from "../views/LoginView.vue";
import OrderView from "../views/OrderView.vue";
import PagesView from "../views/PagesView.vue";
import ProductView from "../views/ProductView.vue";
import SalesView from "../views/SalesView.vue";
import SignupView from "../views/SignupView.vue";
import VacancyView from "../views/VacancyView.vue";
import NotFoundView from "../views/404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { auth: false } },
    { path: "/about", name: "about", component: AboutView, meta: { auth: false } },
    { path: "/basket", name: "basket", component: BasketView, meta: { auth: false } },
    { path: "/categories", name: "categories", component: CategoryView, meta: { auth: false } },
    { path: "/contact", name: "contact", component: ContactView, meta: { auth: false } },
    { path: "/product_filter", name: "filter", component: FilterView, meta: { auth: false } },
    { path: "/login", name: "login", component: LoginView, meta: { auth: false, layout: "login" } },
    { path: "/signup", name: "signup", component: SignupView, meta: { auth: false, layout: "signup" } },
    { path: "/order", name: "order", component: OrderView, meta: { auth: false } },
    { path: "/pages", name: "pages", component: PagesView, meta: { auth: false } },
    { path: "/product/:id", name: "product", component: ProductView, meta: { auth: false } },
    { path: "/sales", name: "sales", component: SalesView, meta: { auth: false } },
    { path: "/vacancies", name: "vacancy", component: VacancyView, meta: { auth: false } },
    { path: "/:pathMatch(.*)*", name: "signup", component: NotFoundView, meta: { auth: false, layout: "notFound" } },
  ],
});

// router.beforeEach((to, from, next) => {
//   const store = admin();
//   if ("auth" in to.meta && to.meta.auth && !store.isRegisteration) {
//     next("/login");
//   } else if ("auth" in to.meta && !to.meta.auth && store.isRegisteration) {
//     next("/");
//   }
//   next();
// });

export default router;
