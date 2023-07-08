<template>
  <section class="recommended bg-color-primary2 py-12">
    <div class="container">
      <ul class="grid grid-cols-2 items-center gap-10">
        <li>
          <h2 class="text__big-2 pb-4">Рекомендуем</h2>
          <ul class="grid grid-cols-2 gap-8">
            <li v-for="card in data" :key="card.id">
              <Card :card="card" />
            </li>
          </ul>
        </li>
        <li>
          <img src="../../assets/images/IMGproduct13.png" alt="image" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Card from "../cards/mainProduct.vue";
import img1 from "/src/assets/images/IMGproduct.png";
import img2 from "/src/assets/images/IMGproduct(1).png";

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
];
</script>
