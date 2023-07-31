<template>
  <section class="newArrivals">
    <div class="container py-12">
      <h3 class="text__primary-pink text-center uppercase">victoriassecret</h3>
      <h2 class="text__big text-center mb-6">{{ t("fuw.new_arrivals") }}</h2>
      <MainSwiper />
    </div>
  </section>
</template>

<script setup>
import MainSwiper from "../swipers/mainSwiper.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
