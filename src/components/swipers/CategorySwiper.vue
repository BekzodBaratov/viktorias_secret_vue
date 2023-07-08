<template>
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
    <swiper-slide v-for="category in categories" :key="category.id">
      <Category :category="category" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import img1 from "/src/assets/images/Background(4).png";
import img2 from "/src/assets/images/Background(5).png";
import img3 from "/src/assets/images/Background(6).png";
import img4 from "/src/assets/images/Background(7).png";
import img5 from "/src/assets/images/Background(8).png";
import Category from "../cards/category.vue";

const categories = [
  {
    id: 0,
    title: "НОВИНКИ",
    count: 12,
    image: img1,
  },
  {
    id: 1,
    title: "Белье",
    count: 12,
    image: img2,
  },
  {
    id: 2,
    title: "Для сна",
    count: 12,
    image: img3,
  },
  {
    id: 3,
    title: "Одежда/обувь",
    count: 12,
    image: img4,
  },
  {
    id: 4,
    title: "Спорт",
    count: 12,
    image: img5,
  },
  {
    id: 5,
    title: "Косметика",
    count: 12,
    image: img1,
  },
  {
    id: 6,
    title: "Спорт",
    count: 12,
    image: img2,
  },
  {
    id: 7,
    title: "Косметика",
    count: 12,
    image: img3,
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
  box-shadow: 0px 5px 7px #0002;
  border: 1px solid #3333;
  border-radius: 50%;
  background-color: white;
  height: 30px;
  width: 30px;
  aspect-ratio: 1 / 1;
}
</style>
