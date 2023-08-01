<template>
  <main class="product my-12">
    <div class="container">
      <div class="grid grid-cols-2 gap-6">
        <div class="grid grid-cols-[1fr_4fr] gap-3">
          <div class="grid grid-rows-4 gap-3">
            <div v-for="(img, i) in product.images" :key="i" @click="selectedImg = i" class="">
              <img :src="img" alt="product" />
            </div>
          </div>
          <div class="h-full">
            <img class="h-full w-full object-contain object-top" :src="product.images[selectedImg]" alt="image" />
          </div>
        </div>
        <div class="content">
          <p class="text__primary-pink">{{ product.category }}</p>
          <h2 class="text__big-2 pb-3">{{ product.title }}</h2>
          <div class="flex divide-x">
            <div class="flex gap-2 px-3 items-center pb-4">
              <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="text__secondary">({{ product.commentCount }} отзывы)</p>
            </div>
            <p class="text__primary px-3 text-center">
              Артикул: <span class="text__secondary">{{ product.vendorCode }}</span>
            </p>
            <p class="text__primary-pink-bold px-3 text-center">в наличии</p>
          </div>
          <h3 class="text-4xl font-semibold text-color-primary pb-6">{{ formatNumber(product.price) }} сум</h3>
          <p class="text__secondary-gray mb-6 border-color-line line-clamp-2">{{ product.desc }}</p>
          <hr />
          <p class="text__primary pt-4 pb-2">Размер: <span class="text__secondary uppercase">M</span></p>
          <div class="flex gap-2 items-center pb-4">
            <span
              class="border w-10 h-8 uppercase rounded-sm cursor-pointer font-bold flex justify-center items-center hover:bg-black hover:text-white"
              v-for="(sz, i) in product.sizes"
              :key="sz.id"
              :class="i == selectedSize ? 'bg-black text-white' : ''"
              @click="selectedSize = i"
            >
              {{ sz.size }}
            </span>
            <span class="link-underline">Размеры и соответствия</span>
          </div>
          <p class="text__primary pt-4 pb-3">Цвет: <span class="text__secondary uppercase">изумрудный</span></p>
          <ul class="flex gap-2 items-center pb-4">
            <li
              v-for="(val, i) in 6"
              :key="i"
              :class="i == selectedColor ? 'border-color-black2' : 'border-white'"
              class="relative border rounded-sm group"
            >
              <div @click="selectedColor = i">
                <img class="w-12 h-12 object-contain object-center" :src="img3" alt="image" />
              </div>
              <Tooltip :text="product.colors[i].color" />
            </li>
          </ul>
          <p class="text__primary pt-4 pb-3">Количество:</p>
          <ul class="flex gap-6 items-center">
            <li>
              <Count />
            </li>
            <li>
              <SButton
                @click="viewMoreBtn = true"
                text="Добавить в корзину"
                variant="primary"
                :loading="viewMoreBtn"
                type="button"
                textClass="''"
                customClass=""
                :hasShadow="true"
                spinnerColor="black"
                :disabled="viewMoreBtn"
              />
            </li>
            <li>
              <div class="border border-color-line px-2 py-1 rounded">
                <i class="fa-solid fa-repeat text-xl"></i>
              </div>
            </li>
            <li>
              <div class="relative group border border-color-line px-2 py-1 rounded">
                <i class="far fa-heart text-xl"></i>
                <Tooltip text="Избранные" />
              </div>
            </li>
          </ul>
          <p class="pt-4 pb-8 border-b border-color-line"><span class="indicate"></span> Готов к отправке</p>
          <h3 class="text__big-3 pt-8 pb-4">Купите прямо сейчас</h3>
          <ul class="flex flex-col gap-3">
            <li>
              <div class="flex gap-3 items-center">
                <div>
                  <img src="../assets/images/icons/Delivery-Truck.svg" alt="delivery-truck1" />
                </div>
                <div>
                  <h3 class="text__primary">Быстрая доставка</h3>
                  <p class="text__secondary-gray">Бесплатная доставка при заказе от 500 000 сум.</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex gap-3 items-center">
                <div>
                  <img src="../assets/images/icons/return.svg" alt="return image" />
                </div>
                <div>
                  <h3 class="text__primary">Возврат за 14 дней</h3>
                  <p class="text__secondary-gray">Не впечатлило? Получите возмещение. У вас есть 14 дней</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="addition mt-12 mb-16">
        <div class="flex justify-center gap-6 md:gap-12">
          <p
            @click="selectedAddition = 'description'"
            :class="
              selectedAddition == 'description' ? 'text__primary underline' : 'font-bold text-lg text-color-black2 '
            "
            class="cursor-pointer"
          >
            Описание
          </p>
          <p
            @click="selectedAddition = 'review'"
            :class="selectedAddition == 'review' ? 'text__primary underline' : 'font-bold text-lg text-color-black2 '"
            class="cursor-pointer"
          >
            Отзыв
          </p>
        </div>
        <h3 class="text__primary pt-6 pb-2">О товаре</h3>
        <p class="text__secondary-gray pb-6">{{ product.desc }}</p>
        <div class="flex gap-3 justify-center">
          <div v-for="pr in product.images" :key="pr">
            <img width="200" :src="pr" :alt="pr" />
          </div>
        </div>
        <Steps hasContainer="true" />
      </div>
      <p class="text__big-3 text-center pb-8">Похожие товары</p>
      <SmilarsSwiper />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import formatNumber from "../helpers/formatNumber";
import Tooltip from "../components/modal/Tooltip.vue";
import SButton from "../components/buttons/SButton.vue";
import Count from "../components/input/counter.vue";
import Steps from "../components/ui/Steps.vue";
import SmilarsSwiper from "../components/swipers/SmilarsSwiper.vue";
import img1 from "../assets/images/product-thumb1.png";
import img2 from "../assets/images/product-thumb2.png";
import img3 from "../assets/images/product-thumb3.png";
import { useProductStore } from "../stores/product";
const route = useRoute();
const store = useProductStore();
const selectedImg = ref(2);
const selectedSize = ref(0);
const selectedColor = ref(0);
const selectedAddition = ref("description");
store.getProduct(route.params.id);

const product = {
  images: [img1, img2, img3],
  category: "Белье",
  title: "Бархатная Ночная Рубашка",
  rating: 4,
  commentCount: 4224,
  vendorCode: "U27",
  payType: "в наличии",
  price: 400000,
  desc: "Одеваешь ты ее в постель, создаешь интересный лук, надев поверх одежды в несколько слоев или носишь ее на. Одеваешь ты ее в постель, создаешь интересный лук, надев поверх одежды в несколько слоев или носишь ее на.Одеваешь ты ее в постель, создаешь интересный лук, надев поверх одежды в несколько слоев или носишь ее на.Одеваешь ты ее в постель, создаешь интересный лук, надев поверх одежды в несколько слоев или носишь ее на.Одеваешь ты ее в постель, создаешь интересный лук, надев поверх одежды в несколько слоев или носишь ее на.",
  sizes: [
    { id: 0, size: "xs" },
    { id: 1, size: "s" },
    { id: 2, size: "m" },
    { id: 3, size: "l" },
    { id: 4, size: "xl" },
    { id: 5, size: "xxl" },
  ],
  colors: [
    { id: 0, color: "white", image: img1 },
    { id: 1, color: "black", image: img1 },
    { id: 2, color: "gray", image: img1 },
    { id: 3, color: "yellow", image: img1 },
    { id: 4, color: "blueviolet", image: img1 },
    { id: 5, color: "brown", image: img1 },
  ],
};

console.log(route.params.id);
</script>

<style scoped>
.indicate {
  @apply inline-block w-3 h-3 rounded-full bg-color-primary mr-1;
}
</style>
