import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
  }),
  actions: {
    async getNews() {
      const toast = useToast();
      try {
        const res = await axios.get("/news");
        console.log(res);
        this.news = res.data;
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async getNew(id) {
      const toast = useToast();
      try {
        const res = await axios.get(`/news/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
  },
});
