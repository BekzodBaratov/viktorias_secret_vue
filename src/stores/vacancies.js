import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useVacanciesStore = defineStore("vacancies", {
  state: () => ({
    vacancies: {},
  }),
  actions: {
    async getVacancies() {
      const toast = useToast();
      try {
        const res = await axios.get("/vacancies");
        this.vacancies = res.data;
      } catch (error) {
        toast.error("Something went wrong, please try again.");
      }
    },
  },
});
