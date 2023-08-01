<template>
  <div class="card flex flex-col">
    <div class="relative overflow-hidden group bg-white min-h-max">
      <img
        v-if="props.card.images"
        class="w-full aspect-3/4 min-h-max object-cover object-center"
        :src="props.card.images[0].image_url"
        alt="image_product"
      />
      <div class="absolute top-2 left-2">
        <ul class="flex gap-2">
          <li
            class="bg-color-danger px-2 md:px-4 py-0.5 md :py-1 text-center rounded-md font-semibold text-xs text-white"
            v-if="card.aksiyafoizi"
          >
            -{{ card.aksiyafoizi }}%
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
        class="group-hover:translate-y-0 md:translate-y-full cursor-pointer absolute bottom-0 inset-x-0 bg-black text-center text__primary-white py-1.5 md:py-2"
      >
        {{ t("fuw.add_to_card") }}
      </button>
      <div class="absolute top-2 right-2">
        <ul class="group-hover:translate-x-0 md:translate-x-[130%] flex flex-col gap-3">
          <li>
            <abbr @click="emit('add_to_fav', props.card)" :title="t('fuw.add_to_fav')">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img v-if="!props.fav" class="w-5 md:w-6" src="/src/assets/images/icons/heart.svg" alt="heart" />
                <img v-else class="w-5 md:w-6" src="/src/assets/images/icons/heart_2.svg" alt="heart" />
              </div>
            </abbr>
          </li>
          <li>
            <abbr @click="fastShowModal = true" :title="t('fuw.fast_show')">
              <div class="bg-white p-2 rounded-md shadow-md flex justify-center items-center">
                <img class="w-5 md:w-6" src="/src/assets/images/icons/Quickview.svg" alt="heart" />
              </div>
            </abbr>
          </li>
        </ul>
      </div>
    </div>
    <RouterLink :to="`/product/${props.card.id}`" class="p-3">
      <h3 class="text__primary">{{ gggg(props.card, "_product_name") }}</h3>
      <p v-if="!props.card.aksiyafoizi" class="text__primary-pink-bold">{{ formatNumber(props.card.price) }} сум</p>
      <div v-else class="flex gap-4 items-end">
        <p class="text__primary-pink-bold">
          {{ formatNumber(props.card.price * ((100 - props.card.aksiyafoizi) / 100)) }} сум
        </p>
        <p class="text-sm line-through text-color-black2">{{ formatNumber(props.card.price) }}</p>
      </div>
    </RouterLink>
    <Modal :data="props.card" :is-open="fastShowModal" @closeModal="fastShowModal = false" :loading="false" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import formatNumber from "../../helpers/formatNumber";
import Modal from "../modal/ProductModal.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const fastShowModal = ref(false);

const lang = ref(localStorage.getItem("lng"));
const gggg = (obj, ff) => obj[lang.value + ff];

const props = defineProps(["card", "fav"]);
const emit = defineEmits(["add_to_fav"]);
const card = computed(() => props.card);
</script>
