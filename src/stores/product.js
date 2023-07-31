import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: {},
  }),
  actions: {
    async getProducts() {
      const toast = useToast();
      try {
        const res = await axios.get("/products");
        console.log(res);
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
  },
});
