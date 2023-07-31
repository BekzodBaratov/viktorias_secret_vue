import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    user: {},
  }),
  actions: {
    async login(data) {
      const { phone_number, password } = data;
      const toast = useToast();
      try {
        const res = await axios.post("/users/login", { phone_number, password });
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async signup(data) {
      // const {
      //   full_name,
      //   phone_number,
      //   password,
      //   brand_name,
      //   brand_uz_country,
      //   brand_ru_country,
      //   brand_en_country,
      //   adress,
      // } = data;
      const toast = useToast();
      try {
        const res = await axios.post("/users", data);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
    async patchUser(data, userId) {
      try {
        const res = await axios.post(`/users/${userId}`, data);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong, please try again");
      }
    },
  },
});
