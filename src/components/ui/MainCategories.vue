<template>
  <section class="mainCategories py-8 md:py-16">
    <div class="container">
      <h2 class="text__big-2 md:text__big text-center">{{ t("fuw.main_categories") }}</h2>
      <p class="text__primary-pink text-center pb-6 md:pb-10">{{ t("fuw.main_categories2") }}</p>
      <CategorySwiper />
    </div>
  </section>
</template>

<script setup>
import CategorySwiper from "../swipers/CategorySwiper.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
