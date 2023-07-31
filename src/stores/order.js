import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: {},
  }),
  actions: {
    async getOrders() {
      const toast = useToast();
      try {
        const res = await axios.get("/products/order");
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async getOrder(id) {
      const toast = useToast();
      try {
        const res = await axios.get(`/products/order/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async createOrder(data) {
      const toast = useToast();
      try {
        const res = await axios.post(`/products/order`, data);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
  },
});
