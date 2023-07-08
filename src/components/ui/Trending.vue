<template>
  <section class="newArrivals">
    <div class="container py-12">
      <h2 class="text__big text-center">В тренде прямо сейчас</h2>
      <h3 class="text-color-black2 text-center pb-10">Лучшая распродажа на этой неделе</h3>
      <TrendSwiper />
      <center>
        <SButton
          @click="viewMoreBtn = true"
          text="Показать все"
          variant="outline"
          :loading="viewMoreBtn"
          type="button"
          textClass="''"
          customClass="mt-6"
          :hasShadow="true"
          spinnerColor="black"
          :disabled="viewMoreBtn"
        />
      </center>
    </div>
  </section>
</template>

<script setup>
import TrendSwiper from "../swipers/trendSwiper.vue";
import SButton from "../buttons/SButton.vue";
import { ref } from "vue";

const viewMoreBtn = ref(false);
</script>
