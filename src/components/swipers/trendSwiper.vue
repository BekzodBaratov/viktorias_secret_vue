<template>
  <swiper
    :navigation="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      '300': { slidesPerView: 2, spaceBetween: 20 },
      '768': { slidesPerView: 3, spaceBetween: 25 },
      '1024': { slidesPerView: 4, spaceBetween: 30 },
    }"
    :loop="true"
    :autoplay="{ delay: 4000 }"
    :modules="[Navigation, Autoplay]"
    class="mainSwiper"
  >
    <swiper-slide v-for="card in store.products" :key="card.id">
      <Card :card="card" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Card from "../cards/mainProduct.vue";
import { useProductStore } from "../../stores/product";
const store = useProductStore();
</script>

<style>
:root {
  --swiper-navigation-size: 14px;
  --swiper-theme-color: #000;
}
.mainSwiper .swiper-button-prev,
.mainSwiper .swiper-button-next {
  border: 1px solid #3333;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  aspect-ratio: 1 / 1;
}
</style>
