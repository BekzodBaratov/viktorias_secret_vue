<template>
  <main class="order">
    <div class="container">
      <h2 class="text__big-2 text-center py-10">Оформление заказа</h2>
      <div class="grid lg:grid-cols-[1.2fr_1fr] gap-12 pb-12 items-start">
        <div class="order-1 card shadow-card p-8">
          <div class="border border-color-line divide-y divide-color-line mb-16">
            <div class="flex justify-between p-3">
              <div class="flex gap-4">
                <p class="text__secondary-gray">Контакты :</p>
                <p class="text__primary">+998 90 500 00 00</p>
              </div>
              <p class="text__primary-pink">Редактировать</p>
            </div>
            <div class="flex justify-between p-3">
              <div class="flex gap-4">
                <p class="text__secondary-gray">Адрес :</p>
                <p class="text__primary">Узбекистан , ташкент ,улица Название 10 дом</p>
              </div>
              <p class="text__primary-pink">Редактировать</p>
            </div>
          </div>

          <h3 class="text__primary pb-3">Оплата</h3>
          <div @click="payType = true" class="border border-color-line mb-3">
            <label for="paywithorder" class="flex justify-between p-3">
              <div class="text__primary-pink-bold">Оплата при доставке</div>
              <input id="paywithorder" type="radio" name="pay" />
            </label>
          </div>
          <div @click="payType = false" class="border border-color-line mb-3">
            <label for="paywithcard" class="flex justify-between p-3">
              <div class="text__primary-pink-bold">Оплата картой</div>
              <input id="paywithcard" type="radio" name="pay" style="display: none" />
              <img
                :class="payType ? '-rotate-90' : 'rotate-0'"
                class="w-4"
                src="../assets/images/icons/bottom-arrow.svg"
                alt="arrow"
              />
            </label>
            <div v-show="!payType" class="grid grid-cols-2 p-3">
              <Input placeholder="Имя" label="Имя на карте" />
              <span></span>
              <Input placeholder="Имя" label="Имя на карте" />
            </div>
          </div>
          <div class="flex gap-3 pb-8">
            <input type="checkbox" id="check" />
            <label for="check" class="text__primary">
              Я прочитал(а) и принимаю <a class="text__primary-pink" href="#">правила и условия</a> сайта *
            </label>
          </div>
          <div class="flex justify-between gap-4">
            <SButton
              @click="viewMoreBtn = true"
              text="Показать все"
              variant="primary"
              :loading="viewMoreBtn"
              type="button"
              textClass="''"
              customClass="mt-6"
              :hasShadow="true"
              spinnerColor="black"
              :disabled="viewMoreBtn"
            />
          </div>
        </div>
        <div class="lg:order-1">
          <table class="mb-12" cellspacing="10" cellpadding="10">
            <thead class="border-b text-left">
              <tr>
                <th class="pb-4">Товары</th>
                <th class="pb-4 pl-4">Количество</th>
                <th class="pb-4 pl-4">Итого</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pr in data" :key="pr.id" class="border-b">
                <td class="py-4">
                  <div class="flex gap-4">
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
                  <div class="flex justify-start">
                    <Counter @handleCount="handleCount" :count="pr.count" />
                  </div>
                </td>
                <td class="pl-4">
                  <p class="text__primary-pink-bold">{{ formatNumber(pr.price) }} сум</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="card shadow-card max-w-md">
            <div class="flex gap-2 items-center border-b">
              <i class="far fa-edit pl-6"></i>
              <p class="pr-6 py-6">Добавьте купон</p>
            </div>
            <form class="flex flex-col p-6 pt-3">
              <Input placeholder="Код скидки" inputType="number" />
              <SButton
                @click="viewMoreBtn = true"
                text="Применить"
                variant="primary"
                :loading="viewMoreBtn"
                type="button"
                textClass="''"
                customClass="mt-3"
                :hasShadow="true"
                spinnerColor="black"
                :disabled="viewMoreBtn"
              />
              <SButton
                text="Отменить"
                variant="text"
                :loading="false"
                type="reset"
                textClass="''"
                customClass="mt-2"
                :hasShadow="true"
                spinnerColor="black"
                :disabled="false"
              />
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
