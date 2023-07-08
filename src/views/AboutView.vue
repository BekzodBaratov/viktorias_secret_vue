<template>
  <main class="aboutCompany">
    <section class="hero">
      <div class="container">
        <h2 class="text__big-2 text-center py-10">О магазине</h2>
        <div class="max-w-3xl mx-auto pb-8">
          <h3 class="text__big-3 text-center pb-6">
            Victoria’s Secret в Узбекистане <br class="hidden md:inline-block" />
            Приветствуем Вас на странице "О магазине" <br class="hidden md:inline-block" />
            - о нас и нашей компании
          </h3>
          <p class="text__secondary-gray text-center">
            Компания Victoria’s Secret – это интернет-магазин премиум класса, что представляет весь спектр оригинальных
            товаров торговой марки (тм) Victoria’s Secret (Виктория Сикрет) в Узбекистане. В 2015 году мы открыли наш
            сайт company.uz и превратили его в один из самых продаваемых и успешных интернет магазинов с продукцией
            Victoria’s Secret в Узбекистане, и с тех пор успешно развиваемся, постоянно увеличиваем ассортимент
            продукции VS, благодаря вам и вашим отзывам совершенствуем свой подход к продажам и к клиентам. Мы постоянно
            работаем над нашим сервисом, чтобы обеспечить вам наилучшие условия и превратить ваши покупки на радость.
          </p>
        </div>
        <img class="w-full" src="../assets/images/IMG-hero.png" alt="" />
      </div>
    </section>
    <section class="status py-12">
      <div class="container">
        <div class="grid grid-cols-2 sm:grid-cols-4 text-center gap-6 sm:divide-x">
          <div v-for="el in data" :key="el.id" class="">
            <h2 class="text__big-2 pb-2">{{ el.status }}</h2>
            <p class="text__secondary">{{ el.title }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="intro">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="order-1 lg:order-none grid grid-cols-2 gap-4">
            <div>
              <img class="w-full rounded-lg" src="../assets/images/IMG-layer.png" alt="image" />
            </div>
            <div>
              <img class="w-full rounded-lg" src="../assets/images/IMG-layer2.png" alt="image" />
            </div>
          </div>
          <div class="sm:p-10">
            <h2 class="text__big-2 pb-6">Почему Вам стоит покупать у нас и что мы можем гарантировать</h2>
            <p class="text__secondary">
              – Гарантия качества и оригинальности продукции Victoria’s SecretПоскольку наш магазин работает напрямую,
              без посредников, все товары поставляются исключительно из США с официальных каталогов Victoria’s Secret, с
              оригинальными документами на товары бренда. Мы уверены, что это 100% оригинал. Мы несем ответственность за
              товар, который продаем и понимаем, что недовольный клиент – потерянный клиент.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutComp py-12">
      <div class="container">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
          <div class="order-1 space-y-4 sm:col-span-2 md:col-span-1">
            <p class="text__primary-pink">Victoria’s Secret</p>
            <h3 class="text__big-3 pb-3">Кто мы такие и что представляем ?</h3>
            <p class="leading-relaxed text__secondary-gray">
              Компания Victoria’s Secret – это интернет-магазин премиум класса, что представляет весь спектр
              оригинальных товаров торговой марки (тм) Victoria’s Secret (Виктория Сикрет) в Узбекистане.
            </p>
            <SButton text="За покупками" variant="primary" />
          </div>
          <div class="order-2 md:order-1">
            <img class="w-full" src="../assets/images/IMG-layer.png" alt="image" />
          </div>
          <div class="order-1">
            <h3 class="text__big-4 pb-3">Скидки, акции и распродажи</h3>
            <p class="text__secondary-gray">
              На сайте присутствует категория <span class="underline">Распродажа</span>, где всегда есть возможность
              недорого купить любимые товары Виктория Сикрет по низкой, выгодной цене. Мы часто делаем разные промо
              акции и распродажи онлайн. Для постоянных клиентов интернет магазин создает специальные предложения, акции
              и частные распродажи. Став нашим VIP клиентом вы получите приятные бонусы, скидки и спец предложения.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Steps class="py-16" />
  </main>
</template>

<script setup>
import Steps from "../components/ui/Steps.vue";
import SButton from "../components/buttons/SButton.vue";
const data = [
  {
    id: 0,
    status: 1200,
    title: "Довольные клиенты",
  },
  {
    id: 1,
    status: "98%",
    title: "Удовлетворенные",
  },
  {
    id: 2,
    status: "2+",
    title: "наши магазины",
  },
  {
    id: 3,
    status: "230",
    title: "Отзывы",
  },
];
</script>

<style scoped>
.intro {
  @apply bg-color-primary2 my-12 py-12;
}
</style>
