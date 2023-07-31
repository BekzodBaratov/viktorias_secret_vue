<template>
  <main class="order relative min-h-[100vh]">
    <div class="sm:container mx-auto">
      <h2 class="text__big-2 text-center pt-3 pb-8 sm:py-8 md:py-10 capitalize">{{ t("basket.basket") }}</h2>
      <div class="grid lg:grid-cols-[1.6fr_1fr] gap-12 pb-12 items-start">
        <div>
          <div class="hidden sm:flex bg-color-primary items-center gap-2 py-2 px-3 mb-8">
            <img src="../assets/images/icons/fire.svg" alt="fire" />
            <p class="text-white">{{ t("basket.check") }}</p>
          </div>
          <div class="hidden sm:block relative overflow-x-auto">
            <table class="w-full mb-12">
              <thead class="border-b text-left">
                <tr>
                  <th class="pb-4">{{ t("basket.goods") }}</th>
                  <th class="pb-4 pl-4">{{ t("basket.cost") }}</th>
                  <th class="pb-4 pl-4">{{ t("basket.qty") }}</th>
                  <th class="pb-4 pl-4">{{ t("basket.over") }}</th>
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
                        <p class="underline cursor-pointer">{{ t("basket.delete") }}</p>
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
          <div class="sm:hidden container">
            <div class="flex flex-col gap-4">
              <div class="grid grid-cols-[1fr_3fr] gap-4" v-for="pr in data" :key="pr.id">
                <img class="w-full h-full object-cover" :src="pr.img" alt="product image" />
                <div>
                  <h3 class="text__primary pb-1 line-clamp-1">{{ pr.title }}</h3>
                  <p class="text__secondary-gray pb-1 line-clamp-1">{{ pr.desc }}</p>
                  <p class="text__primary-pink-bold pb-2 min-w-max">{{ formatNumber(pr.price / 2) }} сум</p>
                  <div class="flex justify-start gap-6 items-center">
                    <Counter @handleCount="handleCount" :count="pr.count" />
                    <p class="border-b border-black cursor-pointer">{{ t("basket.delete") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden sm:flex justify-between">
            <SButton
              @click="router.go(-1)"
              text=""
              variant="primary"
              type="button"
              textClass="''"
              customClass=""
              :hasShadow="true"
            >
              <div class="flex gap-2 items-center capitalize">
                <i class="fa-solid fa-rotate-left"></i>
                <p>{{ t("basket.back_to_store") }}</p>
              </div>
            </SButton>
            <SButton
              @click="router.go()"
              text=""
              variant="secondary"
              type="button"
              textClass="''"
              customClass=""
              :hasShadow="true"
            >
              <div class="flex gap-2 items-center capitalize">
                <i class="fa-solid fa-arrows-rotate"></i>
                <p>{{ t("basket.update_cart") }}</p>
              </div>
            </SButton>
          </div>
        </div>
        <div class="absolute sm:static bottom-0 w-full lg:order-1">
          <div class="card shadow-card2 sm:shadow-card bg-white">
            <div class="border-b">
              <div class="flex justify-between gap-2 items-center px-6">
                <div class="flex gap-2 items-center">
                  <i class="fas fa-edit"></i>
                  <p class="py-6">{{ t("basket.note") }}</p>
                </div>
                <div class="flex gap-2 items-center">
                  <i class="fas fa-truck"></i>
                  <p class="py-6">{{ t("basket.order") }}</p>
                </div>
                <div class="flex gap-2 items-center">
                  <i class="fa-solid fa-ticket"></i>
                  <p class="py-6">{{ t("basket.coupon") }}</p>
                </div>
              </div>
            </div>
            <div class="px-6 space-y-3 pt-4">
              <div class="flex justify-between">
                <p>{{ t("basket.order") }}</p>
                <p class="font-semibold text-color-primary uppercase">{{ t("basket.free") }}</p>
              </div>
              <div class="flex justify-between">
                <p>{{ t("basket.discount") }}</p>
                <p class="font-semibold">-144 000 сум</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p class="text__primary capitalize">{{ t("basket.total") }}</p>
                <p class="text__primary">320 000 сум</p>
              </div>
            </div>
            <form class="flex flex-col p-6 pt-3">
              <RouterLink class="flex" to="/order">
                <SButton
                  @click="viewMoreBtn = true"
                  :text="t('basket.design')"
                  variant="primary"
                  :loading="viewMoreBtn"
                  type="button"
                  textClass="''"
                  customClass="mt-2 py-3 grow"
                  :hasShadow="true"
                  spinnerColor="black"
                  :disabled="viewMoreBtn"
                />
              </RouterLink>
              <RouterLink to="/product_filter" class="link text-center pt-2">{{
                t("basket.keep_shopping")
              }}</RouterLink>
            </form>
          </div>
        </div>
        <div class="sm:hidden h-[288px]"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import SButton from "../components/buttons/SButton.vue";
import Counter from "../components/input/counter.vue";
import formatNumber from "../helpers/formatNumber";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const router = useRouter();
const { t } = useI18n();

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
