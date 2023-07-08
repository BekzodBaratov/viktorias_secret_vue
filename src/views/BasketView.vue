<template>
  <main class="order">
    <div class="container">
      <h2 class="text__big-2 text-center py-10">Оформление заказа</h2>
      <div class="grid lg:grid-cols-[1.6fr_1fr] gap-12 pb-12 items-start">
        <div>
          <div class="bg-color-primary flex items-center gap-2 py-2 px-3 mb-8">
            <img src="../assets/images/icons/fire.svg" alt="fire" />
            <p class="text-white">Пожалуйста, проверьте сейчас, пока ваши товары не распроданы!</p>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full mb-12">
              <thead class="border-b text-left">
                <tr>
                  <th class="pb-4">Товары</th>
                  <th class="pb-4 pl-4">Цена</th>
                  <th class="pb-4 pl-4">Количество</th>
                  <th class="pb-4 pl-4">Итого</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pr in data" :key="pr.id" class="border-b">
                  <td class="py-4">
                    <div class="flex gap-4 min-w-[200px]">
                      <div class="w-20 aspect-square">
                        <img class="w-full h-full object-cover" :src="pr.img" alt="product image" />
                      </div>
                      <div>
                        <h3 class="text__primary pb-2 line-clamp-1">{{ pr.title }}</h3>
                        <p class="text__secondary-gray pb-1 line-clamp-1">{{ pr.desc }}</p>
                        <p class="underline cursor-pointer">Удалить</p>
                      </div>
                    </div>
                  </td>
                  <td class="pl-4">
                    <p class="text__primary min-w-max">{{ formatNumber(pr.price / 2) }} сум</p>
                  </td>
                  <td class="pl-4">
                    <div class="flex justify-start">
                      <Counter @handleCount="handleCount" :count="pr.count" />
                    </div>
                  </td>
                  <td class="pl-4">
                    <p class="text__primary-pink-bold min-w-max">{{ formatNumber(pr.price) }} сум</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-between">
            <SButton
              @click="viewMoreBtn = true"
              text=""
              variant="primary"
              :loading="viewMoreBtn"
              type="button"
              textClass="''"
              customClass=""
              :hasShadow="true"
              spinnerColor="black"
              :disabled="viewMoreBtn"
            >
              <div class="flex gap-2 items-center capitalize">
                <i class="fa-solid fa-rotate-left"></i>
                <p>назад в магазин</p>
              </div>
            </SButton>
            <SButton
              @click="viewMoreBtn = true"
              text=""
              variant="secondary"
              :loading="viewMoreBtn"
              type="button"
              textClass="''"
              customClass=""
              :hasShadow="true"
              spinnerColor="black"
              :disabled="viewMoreBtn"
            >
              <div class="flex gap-2 items-center capitalize">
                <i class="fa-solid fa-arrows-rotate"></i>
                <p>Обновить корзину</p>
              </div>
            </SButton>
          </div>
        </div>
        <div class="lg:order-1">
          <div class="card shadow-card">
            <div class="border-b">
              <div class="flex justify-between gap-2 items-center px-6">
                <div class="flex gap-2 items-center">
                  <i class="fas fa-edit"></i>
                  <p class="py-6">Примечание</p>
                </div>
                <div class="flex gap-2 items-center">
                  <i class="fas fa-truck"></i>
                  <p class="py-6">Доставка</p>
                </div>
                <div class="flex gap-2 items-center">
                  <i class="fa-solid fa-ticket"></i>
                  <p class="py-6">Купон</p>
                </div>
              </div>
            </div>
            <div class="px-6 space-y-3 pt-4">
              <div class="flex justify-between">
                <p>Доставка</p>
                <p class="font-semibold text-color-primary uppercase">бесплатно</p>
              </div>
              <div class="flex justify-between">
                <p>Скидки</p>
                <p class="font-semibold">-144 000 сум</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p class="text__primary capitalize">итог</p>
                <p class="text__primary">320 000 сум</p>
              </div>
            </div>
            <form class="flex flex-col p-6 pt-3">
              <Input placeholder="Код скидки" inputType="number" />
              <SButton
                @click="viewMoreBtn = true"
                text="Просмотреть корзину"
                variant="secondary"
                :loading="viewMoreBtn"
                type="button"
                textClass="''"
                customClass="mt-3"
                :hasShadow="true"
                spinnerColor="black"
                :disabled="viewMoreBtn"
              />
              <SButton
                @click="viewMoreBtn = true"
                text="Оформить"
                variant="primary"
                :loading="viewMoreBtn"
                type="button"
                textClass="''"
                customClass="mt-2"
                :hasShadow="true"
                spinnerColor="black"
                :disabled="viewMoreBtn"
              />
              <RouterLink to="/" class="link text-center pt-2">Или продолжайте совершать покупки</RouterLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import SButton from "../components/buttons/SButton.vue";
import Counter from "../components/input/counter.vue";
import formatNumber from "../helpers/formatNumber";
import Input from "../components/input/productInput.vue";

const viewMoreBtn = ref(false);
const payType = ref(false);

function handleCount(count) {
  console.log(count);
}

const data = [
  {
    id: 0,
    img: "/src/assets/images/IMG-1.png",
    title: "Костюм 3-в-1 Victoria's",
    desc: "Велюровый, XS",
    count: 1,
    price: 380000,
  },
  {
    id: 1,
    img: "/src/assets/images/IMG-1.png",
    title: "Костюм 3-в-1 Victoria's",
    desc: "Велюровый, XS",
    count: 6,
    price: 650000,
  },
  {
    id: 2,
    img: "/src/assets/images/IMG-1.png",
    title: "Костюм 3-в-1 Victoria's",
    desc: "Велюровый, XS",
    count: 5,
    price: 9990000,
  },
];
</script>
