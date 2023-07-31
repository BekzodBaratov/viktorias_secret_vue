import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useBannerStore = defineStore("banners", {
  state: () => ({
    banners: [],
  }),
  actions: {
    async getBanners() {
      const toast = useToast();
      try {
        const res = await axios.get("/banner");
        this.banners = res.data;
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async getBanner(id) {
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
