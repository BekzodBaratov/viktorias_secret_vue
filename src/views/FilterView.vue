<template>
  <main class="product_fiter">
    <div class="container pb-12">
      <h2 class="text__big-2 text-center py-10">Белье</h2>
      <div class="grid grid-cols-[1fr_3fr] gap-4">
        <div class="filter">
          <Dropdown title="Категории" :isOpen="isOpen1" @handleDropdown="handleDropdown1">
            <ul class="py-1 text-sm text__secondary-gray" aria-labelledby="dropdownDefaultButton">
              <li v-for="i in 6">
                <a href="#" class="px-2 py-2 hover:bg-gray-100 rounded-md flex justify-between">
                  <p>Новинки</p>
                  <p class="text__primary-pink">(112)</p>
                </a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown title="Размер" :isOpen="isOpen2" @handleDropdown="handleDropdown2">
            <ul class="py-1 text-sm text__secondary-gray flex gap-3 flex-wrap" aria-labelledby="dropdownDefaultButton">
              <li v-for="i in 6">
                <a
                  href="#"
                  class="px-2 py-2 hover:bg-color-black hover:text-white rounded-md flex justify-between border border-color-line font-semibold"
                >
                  XXS
                </a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown title="Диапазон цен" :isOpen="isOpen3" @handleDropdown="handleDropdown3"> </Dropdown>
          <Dropdown title="Цвета" :isOpen="isOpen4" @handleDropdown="handleDropdown4">
            <ul class="py-1 text-sm text__secondary-gray flex gap-2 flex-wrap" aria-labelledby="dropdownDefaultButton">
              <li v-for="i in 6">
                <a
                  href="#"
                  class="inline-block rounded-md bg-color-danger align-middle"
                  :class="i == 1 ? 'w-5 h-5 ring-offset-2 ring-1 ring-black ' : 'w-6 h-6'"
                >
                </a>
              </li>
            </ul>
          </Dropdown>
          <div class="flex justify-between py-4">
            <SButton text="применить" variant="primary" />
            <SButton text="reset" variant="outline" type="reset" />
          </div>
        </div>
        <div class="product">
          <div class="banner pb-4">
            <img src="../assets/images/banner_filter_product.png" alt="advertising" />
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-3 py-6">
                <img
                  @click="gridProduct = 2"
                  class="grid-icon h-8 hover:bg-black rounded-sm"
                  src="../assets/images/icons/Grid-2.svg"
                  alt="images"
                />
                <img
                  @click="gridProduct = 3"
                  class="grid-icon h-8 hover:bg-black rounded-sm"
                  src="../assets/images/icons/Grid-3.svg"
                  alt="images"
                />
                <img
                  @click="gridProduct = 4"
                  class="grid-icon h-8 hover:bg-black rounded-sm"
                  src="../assets/images/icons/Grid-4.svg"
                  alt="images"
                />
                <img
                  @click="gridProduct = 5"
                  class="grid-icon h-8 hover:bg-black rounded-sm"
                  src="../assets/images/icons/Grid-5.svg"
                  alt="images"
                />
                <img
                  class="grid-icon h-8 hover:bg-black rounded-sm"
                  src="../assets/images/icons/Grid-1.svg"
                  alt="images"
                />
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" id="pay" />
                <label for="pay">Показывать товары, имеющиеся в наличии</label>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <p class="min-w-max">Сортировать по</p>
              <!-- <Dropdown title="Популярные"></Dropdown> -->
              <Select></Select>
            </div>
          </div>
          <div ref="scrollComponent" class="grid gap-4" :class="'grid-cols-' + gridProduct">
            <div v-for="card in data">
              <ProductCard :card="card" :key="card.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Dropdown from "../components/input/Dropdown.vue";
import SButton from "../components/buttons/SButton.vue";
import ProductCard from "../components/cards/mainProduct.vue";
import Select from "../components/input/select.vue";
import img1 from "/src/assets/images/IMGproduct.png";
import img2 from "/src/assets/images/IMGproduct(1).png";

const loadMoreProducts = () => console.log("data loaded");
const scrollComponent = ref(null);
function handleScroll() {
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMoreProducts();
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(true);
const handleDropdown1 = () => (isOpen1.value = !isOpen1.value);
const handleDropdown2 = () => (isOpen2.value = !isOpen2.value);
const handleDropdown3 = () => (isOpen3.value = !isOpen3.value);
const handleDropdown4 = () => (isOpen4.value = !isOpen4.value);

const gridProduct = ref(4);

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
  {
    id: 2,
    price: 400000,
    title: "Бархатная Ночная Рубашка",
    image: img1,
    new: false,
    sale: 25,
  },
  {
    id: 3,
    price: 380000,
    title: "Кошелек-ключница Брелок",
    image: img2,
    new: false,
    sale: 25,
  },
  {
    id: 4,
    price: 380000,
    title: "Кошелек-ключница Брелок",
    image: img2,
    new: false,
    sale: 25,
  },
];
</script>
