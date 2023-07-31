<template>
  <header class="bg-white relative">
    <nav class="border-b nav1">
      <div class="container text-sm flex justify-between items-center">
        <ul class="flex gap-3">
          <li class="text-color-primary">
            <p>Victoria Secret</p>
          </li>
          <li class="hidden lg:block">
            <p>Pink</p>
          </li>
          <li class="hidden lg:block">
            <p>Estee Lauder</p>
          </li>
          <li class="hidden lg:block">
            <p>Lancome</p>
          </li>
          <li class="hidden lg:block">
            <p>Michael Kors</p>
          </li>
        </ul>
        <RouterLink to="/sales" class="hidden md:flex gap-4 text-color-primary group">
          <p>{{ t("header.order") }}</p>
          <p class="flex gap-2">
            Подробнее
            <img src="/src/assets/images/icons/arrow-right.svg" class="group-hover:translate-x-1" alt="right-arrow" />
          </p>
        </RouterLink>
        <Select @getVal="getVal" :selected="language" modelLabel="" :data="data"></Select>
      </div>
    </nav>
    <nav class="nav1 bg-color-primary md:bg-white">
      <div class="container py-1">
        <ul class="flex justify-between items-center">
          <li>
            <ul class="flex gap-3">
              <li @click="openBigMenu = !openBigMenu">
                <img src="/src/assets/images/icons/align-left.svg" alt="align-left" />
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/categories">{{ t("header.catalog") }}</RouterLink>
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/about">{{ t("header.about") }}</RouterLink>
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/pages">{{ t("header.delivery") }}</RouterLink>
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/pages">{{ t("header.payment") }}</RouterLink>
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/pages">{{ t("header.stock") }}</RouterLink>
              </li>
              <li class="hidden md:block capitalize">
                <RouterLink to="/vacancies">{{ t("header.jobs") }}</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/">
              <img class="w-28" src="/src/assets/images/logo.png" alt="logo" />
            </RouterLink>
          </li>
          <li>
            <ul class="flex gap-3">
              <li class="hidden md:block">
                <a href="tel:+998905000000">+998 90 500 00 00</a>
              </li>
              <li>
                <RouterLink to="/categories"></RouterLink>
                <img src="/src/assets/images/icons/search.svg" alt="search" />
              </li>
              <!-- <li>
                <RouterLink to="/profile">
                  <img src="/src/assets/images/icons/user.svg" alt="user" />
                </RouterLink>
              </li> -->
              <!-- <li>
                <RouterLink to="/saved">
                  <img src="/src/assets/images/icons/heart.svg" alt="heart" />
                </RouterLink>
              </li> -->
              <li>
                <RouterLink to="/basket">
                  <img src="/src/assets/images/icons/shopping-cart.svg" alt="shopping-cart" />
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="hidden md:block bg-color-primary nav3">
      <div class="container py-2">
        <ul class="flex gap-4 items-center justify-center text-white overflow-hidden line-clamp-1">
          <li v-for="ct in store.categories" :key="ct.id">
            <RouterLink :to="`/product_filter/?category=${ct.en_category_name}`">
              {{ getLangData(ct, "_category_name") }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div v-show="openBigMenu" class="big-menu absolute inset-x-0 bg-white shadow-xl">
      <div class="container py-12">
        <ul class="grid grid-cols-5 gap-3 items-start">
          <li>
            <ul class="big-menu-nav">
              <li v-for="ct in store.categories" :key="ct.id">
                <RouterLink class="hover:text-color-primary" :to="`/product_filter/?category=${ct.en_category_name}`">
                  {{ getLangData(ct, "_category_name") }}
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- image_url togirlansa ishlatiladi -->
          <!-- <li v-for="el in filteredData">
            <RouterLink class="relative" to="#">
              <img :src="el.image_url" alt="image" />
              <p class="absolute top-4 left-2 text-color-primary">{{ getLangData(el, "_category_name") }}</p>
            </RouterLink>
          </li> -->
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import Select from "../components/input/select.vue";
import { useCategoryStore } from "../stores/category";
import { useI18n } from "vue-i18n";
const store = useCategoryStore();
const { t, locale } = useI18n();
const language = ref(localStorage.getItem("lng"));
store.getCategories();

const getLangData = (arr, two) => arr[`${language.value}${two}`];

const getVal = (lang) => {
  locale.value = lang;
  language.value = lang;
  localStorage.setItem("lng", lang);
};
const filteredData = ref([]);
watch(
  () => store.categories,
  (data) => {
    filteredData.value = data.filter((obj) => obj.image_url).slice(0, 4);
  }
);
console.log(filteredData);

const data = [
  { id: 1, name: "uz" },
  { id: 2, name: "ru" },
  { id: 3, name: "en" },
];
const openBigMenu = ref(false);
</script>

<style scoped>
.nav1 .router-link-active,
.nav1 .router-link-exact-active {
  @apply text-color-primary;
}
.nav3 .router-link-active,
.nav3 .router-link-exact-active {
  @apply text-color-black;
}
</style>
