<template>
  <section class="news">
    <div class="container">
      <center class="pb-8">
        <h2 class="text__big">{{ t("fuw.news") }}</h2>
        <p class="text__primary-pink">{{ t("fuw.news2") }}</p>
      </center>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <template v-for="newss in store.news" :key="newss.id">
          <Card :news="newss" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "../cards/news.vue";
import img1 from "/src/assets/images/sport-top-min1.png";
import img2 from "/src/assets/images/krashi-aromatu-min(1)1.png";
import img3 from "/src/assets/images/popularnue-sprei-vs-min1.png";
import { useI18n } from "vue-i18n";
import { useNewsStore } from "../../stores/news";
const store = useNewsStore();
store.getNews(0);
const { t } = useI18n();
const news = [
  {
    id: 0,
    title: "Как выбрать спортивный бюстгальтер-топ?",
    img: img1,
    category: "Блог",
    author: "Имя",
    date: "Май 5, 2023",
  },
  {
    id: 1,
    title: "Лучшие ароматы от Victoria’s Secret",
    img: img2,
    category: "Блог",
    author: "Имя",
    date: "Май 5, 2023",
  },
  {
    id: 2,
    title: "Самые популярные спреи Victoria's Secret",
    img: img3,
    category: "Блог",
    author: "Имя",
    date: "Май 5, 2023",
  },
];
</script>
