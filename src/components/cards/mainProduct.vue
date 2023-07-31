<template>
  <div class="card flex flex-col">
    <div class="relative overflow-hidden group bg-white">
      <img class="w-full aspect-3/4 object-contain" :src="card.image" alt="image_product" />
      <div class="absolute top-2 left-2">
        <ul class="flex gap-2">
          <li
            class="bg-color-danger px-2 md:px-4 py-0.5 md :py-1 text-center rounded-md font-semibold text-xs text-white"
            v-if="card.sale"
          >
            -{{ card.sale }}%
          </li>
          <li
            class="bg-color-primary px-2 md:px-4 py-0.5 md :py-1 text-center rounded-md font-semibold text-white text-xs"
            v-if="card.new"
          >
            {{ card.new && t("fuw.new") }}
          </li>
        </ul>
      </div>
      <button
        class="group-hover:translate-y-0 md:translate-y-full cursor-pointer absolute bottom-0 inset-x-0 bg-black text-center text__primary-white py-2 md:py-3"
      >
        {{ t("fuw.add_to_card") }}
      </button>
      <div class="absolute top-2 right-2">
        <ul class="group-hover:translate-x-0 md:translate-x-[130%] flex flex-col gap-3">
          <li>
            <abbr @click="heartFilled = !heartFilled" :title="t('fuw.favourites')">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img v-if="!heartFilled" class="w-5 md:w-6" src="/src/assets/images/icons/heart.svg" alt="heart" />
                <img v-else class="w-5 md:w-6" src="/src/assets/images/icons/heart_2.svg" alt="heart" />
              </div>
            </abbr>
          </li>
          <li>
            <abbr @click="fastShowModal = true" title="Быстрый просмотр">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img class="w-5 md:w-6" src="/src/assets/images/icons/Quickview.svg" alt="heart" />
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
    <Modal :data="card" :is-open="fastShowModal" @closeModal="fastShowModal = false" :loading="false" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import formatNumber from "../../helpers/formatNumber";
import Modal from "../modal/ProductModal.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const heartFilled = ref(false);
const fastShowModal = ref(false);

const props = defineProps(["card"]);
const card = computed(() => props.card);
</script>
