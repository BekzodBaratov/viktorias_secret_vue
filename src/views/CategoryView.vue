<template>
  <main class="category pb-6">
    <h2 class="text__big-2 text-center py-8">Категории</h2>
    <div class="banner pb-[1px]">
      <img src="../assets/images/BANNER.png" alt="" />
    </div>
    <ul class="categories grid grid-cols-2 md:grid-cols-3 gap-[1px]">
      <li v-for="ct in categories" :key="ct.id" class="relative">
        <img class="w-full h-full object-cover object-center" :src="ct.image" :alt="ct.title" />
        <div class="absolute left-1/2 bottom-4 -translate-x-1/2">
          <div class="bg-white rounded-sm">
            <p class="font-semibold py-1 px-6">
              {{ ct.title }} <span class="text__primary-pink">({{ ct.count }})</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
import img1 from "/src/assets/images/Background(4).png";
import img2 from "/src/assets/images/Background(5).png";
import img3 from "/src/assets/images/Background(6).png";
import img4 from "/src/assets/images/Background(7).png";
import img5 from "/src/assets/images/Background(8).png";
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
];
</script>
