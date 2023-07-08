<template>
  <header class="bg-white relative">
    <nav class="border-b nav1">
      <div class="container text-sm flex justify-between items-center">
        <ul class="flex gap-3">
          <li class="text-black hover:text-color-primary">
            <RouterLink to="/">Victoria Secret </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> Pink </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> Estee Lauder </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> Lancome </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> Michael Kors </RouterLink>
          </li>
        </ul>
        <ul class="flex gap-4 text-color-primary">
          <li>
            <RouterLink to="/">БЕСПЛАТНАЯ ДОСТАВКА! При заказе на сумму от 500 000 сум</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="flex gap-2 group">
              Подробнее
              <img src="/src/assets/images/icons/arrow-right.svg" class="group-hover:translate-x-1" alt="right-arrow" />
            </RouterLink>
          </li>
        </ul>
        <div>
          <Select modelLabel="O'zbek tili" :data="data"></Select>
        </div>
      </div>
    </nav>
    <nav class="nav1">
      <div class="container py-1">
        <ul class="flex justify-between items-center">
          <li>
            <ul class="flex gap-3">
              <li @click="openBigMenu = !openBigMenu">
                <img src="/src/assets/images/icons/align-left.svg" alt="align-left" />
              </li>
              <li>каталог</li>
              <li>о бренде</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Акции</li>
              <li>Вакансии</li>
            </ul>
          </li>
          <li>
            <img class="w-28" src="/src/assets/images/logo.png" alt="logo" />
          </li>
          <li>
            <ul class="flex gap-3">
              <li>
                <a href="tel:+998905000000">+998 90 500 00 00</a>
              </li>
              <li>
                <img src="/src/assets/images/icons/search.svg" alt="search" />
              </li>
              <li>
                <RouterLink to="/profile">
                  <img src="/src/assets/images/icons/user.svg" alt="user" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/saved">
                  <img src="/src/assets/images/icons/heart.svg" alt="heart" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/order">
                  <img src="/src/assets/images/icons/shopping-cart.svg" alt="shopping-cart" />
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="bg-color-primary nav3">
      <div class="container py-2">
        <ul class="flex gap-4 items-center justify-center text-white">
          <li>
            <RouterLink to="/">Новинки</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Белье</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Для сна</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Одежда/обувь</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Спорт</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Косметика</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Аксессуары</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Подарки</RouterLink>
          </li>
          <li>
            <RouterLink to="/#">Распродажа</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div v-show="openBigMenu" class="big-menu absolute inset-x-0 bg-white shadow-xl">
      <div class="container py-12">
        <ul class="grid grid-cols-5 gap-3 items-start">
          <li>
            <ul class="big-menu-nav">
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Белье</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Белье</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Аксесуары</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Косметика</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Белье </RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Белье</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Аксесуары </RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-color-primary" to="#"> Косметика </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink class="relative" to="#">
              <img src="/src/assets/images/Background_2.png" alt="image" />
              <p class="absolute top-4 left-2 text-color-primary">НОВИНКИ</p>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="relative" to="#">
              <img src="/src/assets/images/Background_3.png" alt="image" />
              <p class="absolute top-4 left-2 text-color-primary">НОВИНКИ</p>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="relative" to="#">
              <img src="/src/assets/images/Background_2.png" alt="image" />
              <p class="absolute top-4 left-2 text-color-primary">НОВИНКИ</p>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="relative" to="#">
              <img src="/src/assets/images/Background_3.png" alt="image" />
              <p class="absolute top-4 left-2 text-color-primary">НОВИНКИ</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Select from "../components/input/select.vue";
const data = [
  { id: 1, name: "O'zbek tili" },
  { id: 2, name: "Русский язык" },
  { id: 3, name: "English language" },
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
