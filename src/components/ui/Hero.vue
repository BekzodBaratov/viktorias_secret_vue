<template>
  <section class="hero">
    <!-- <pre>{{ store.banners }}</pre> -->

    <swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :modules="[Autoplay, Pagination]"
      class="mainSwiper"
    >
      <swiper-slide v-for="bn in store.banners" :key="bn.id">
        <img class="w-full aspect-banner object-cover object-center" :src="bn.image_url" alt="slider" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import { useBannerStore } from "../../stores/banner";
const store = useBannerStore();
store.getBanners();
</script>
