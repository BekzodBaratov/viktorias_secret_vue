<template>
  <section class="mainCategories py-8 md:py-16">
    <div class="container">
      <h2 class="text__big text-center">Основные категории</h2>
      <p class="text__primary-pink text-center pb-6 md:pb-10">50 категории больше 1 000 товаров</p>
      <CategorySwiper />
    </div>
  </section>
</template>

<script setup>
import CategorySwiper from "../swipers/CategorySwiper.vue";
</script>
