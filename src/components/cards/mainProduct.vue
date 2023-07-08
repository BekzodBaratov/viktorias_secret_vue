<template>
  <div class="card flex flex-col">
    <div class="relative overflow-hidden group">
      <img class="w-full aspect-square object-contain" :src="card.image" alt="image_product" />
      <div class="absolute top-2 left-2">
        <ul class="flex gap-2">
          <li class="bg-color-danger px-4 py-1 text-center rounded-md text__primary-white" v-if="card.sale">
            -{{ card.sale }}%
          </li>
          <li class="bg-color-primary px-4 py-1 text-center rounded-md text__primary-white" v-if="card.new">
            {{ card.new && "Новинка" }}
          </li>
        </ul>
      </div>
      <button
        class="group-hover:translate-y-0 translate-y-full cursor-pointer absolute bottom-0 inset-x-0 bg-black text-center text__primary-white py-3"
      >
        Добавить в корзину
      </button>
      <div class="absolute top-2 right-2">
        <ul class="group-hover:translate-x-0 translate-x-[130%] flex flex-col gap-3">
          <li>
            <abbr title="Быстрый просмотр">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img class="w-6" src="/src/assets/images/icons/heart.svg" alt="heart" />
              </div>
            </abbr>
          </li>
          <li>
            <abbr title="Быстрый просмотр">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img class="w-6" src="/src/assets/images/icons/Quickview.svg" alt="heart" />
              </div>
            </abbr>
          </li>
          <li>
            <abbr title="Быстрый просмотр">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img class="w-6" src="/src/assets/images/icons/compare.svg" alt="heart" />
              </div>
            </abbr>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-3">
      <h3 class="text__primary">{{ card.title }}</h3>
      <p v-if="!card.sale" class="text__primary-pink-bold">{{ formatNumber(card.price) }} сум</p>
      <div v-else class="flex gap-4 items-end">
        <p class="text__primary-pink-bold">{{ formatNumber(card.price * ((100 - card.sale) / 100)) }} сум</p>
        <p class="text-sm line-through text-color-black2">{{ formatNumber(card.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import formatNumber from "../../helpers/formatNumber";

const props = defineProps(["card"]);
const card = computed(() => props.card);
</script>
