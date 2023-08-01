import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    favourites: [
      {
        id: 0,
        price: 400000,
        title: "Бархатная Ночная Рубашка",
        image: "/src/assets/images/IMGproduct(1).png",
        new: true,
        sale: null,
      },
      {
        id: 1,
        price: 380000,
        title: "Кошелек-ключница Брелок",
        image: "/src/assets/images/IMGproduct(1).png",
        new: true,
        sale: 25,
      },
    ],
  }),
  getters: {
    getFavouritesId() {
      return this.favourites.map((fav) => fav.id);
    },
  },
  actions: {
    async getProducts() {
      const toast = useToast();
      try {
        const res = await axios.get("/products");
        this.products = res.data.data;
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async getProduct(id) {
      const toast = useToast();
      try {
        const res = await axios.get(`/products/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    addToFavourites(obj) {
      this.favourites = [...this.favourites, obj];
    },
    hasFav(id) {
      return this.getFavouritesId.includes(id);
    },
  },
});
