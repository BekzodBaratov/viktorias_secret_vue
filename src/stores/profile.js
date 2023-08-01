import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    user: {},
    token: "",
  }),
  getters: {
    isVerified() {
      return Boolean(this.token && this.user.id);
    },
  },
  actions: {
    async login(data) {
      const toast = useToast();
      try {
        const res = await axios.post("/users/login", data);
        console.log(res);
        this.token = res.data.token;
        this.user = res.data.users;
      } catch (error) {
        console.log(error.response.data.error);
        toast.error(error.response.data.error);
      }
    },
    async signup(data) {
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
  persist: true,
});
