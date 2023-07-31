<template>
  <section class="hero">
    <!-- <pre>{{ store.banners }}</pre> -->

    <swiper
      :navigation="true"
      :slidesPerView="6"
      :spaceBetween="20"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :modules="[Navigation, Autoplay]"
      class="mainSwiper"
    >
      <swiper-slide v-for="bn in store.banners" :key="bn.id">
        <!-- image_url togirlangandan keyin yoqiladi -->
        <!-- <img :src="bn.image_url" alt="slider" /> -->
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import { useBannerStore } from "../../stores/banner";
const store = useBannerStore();
store.getBanners();
</script>
