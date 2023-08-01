import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    product: {},
    favourites: [],
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
        this.product = res.data.data;
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    addToFavourites(obj) {
      const sameFavs = this.favourites.filter((val) => val.id == obj.id).length;
      if (sameFavs) {
        this.favourites = this.favourites.filter((val) => val.id != obj.id);
      } else {
        this.favourites = [...this.favourites, obj];
      }
    },
    hasFav(id) {
      return this.getFavouritesId.includes(id);
    },
  },
});
