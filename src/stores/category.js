import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const toast = useToast();
      try {
        const res = await axios.get("/products/categories");
        this.categories = res.data.data;
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async getCategory(id) {
      const toast = useToast();
      try {
        const res = await axios.get(`/banner/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
  },
});
