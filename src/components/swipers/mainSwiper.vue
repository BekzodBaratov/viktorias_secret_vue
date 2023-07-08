<template>
  <swiper
    :navigation="true"
    :slidesPerView="4"
    :spaceBetween="30"
    :pagination="{ clickable: true }"
    :loop="true"
    :autoplay="{ delay: 5000 }"
    :modules="[Navigation, Autoplay]"
    class="mainSwiper"
  >
    <swiper-slide v-for="card in data" :key="card.id">
      <Card :card="card" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import img1 from "/src/assets/images/IMGproduct.png";
import img2 from "/src/assets/images/IMGproduct(1).png";
import Card from "../cards/mainProduct.vue";

const data = [
  {
    id: 0,
    price: 400000,
    title: "Бархатная Ночная Рубашка",
    image: img1,
    new: true,
    sale: null,
  },
  {
    id: 1,
    price: 380000,
    title: "Кошелек-ключница Брелок",
    image: img2,
    new: true,
    sale: 25,
  },
  {
    id: 2,
    price: 400000,
    title: "Бархатная Ночная Рубашка",
    image: img1,
    new: false,
    sale: 25,
  },
  {
    id: 3,
    price: 380000,
    title: "Кошелек-ключница Брелок",
    image: img2,
    new: false,
    sale: 25,
  },
  {
    id: 4,
    price: 380000,
    title: "Кошелек-ключница Брелок",
    image: img2,
    new: false,
    sale: 25,
  },
];
</script>

<style>
:root {
  --swiper-navigation-size: 14px;
  --swiper-theme-color: #000;
}
.mainSwiper .swiper-button-prev,
.mainSwiper .swiper-button-next {
  /* background-image: url("../../assets/images/icons/align-left.svg"); */
  /* box-shadow: 0px 5px 7px #0003; */
  border: 1px solid #3333;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  aspect-ratio: 1 / 1;
}
</style>
