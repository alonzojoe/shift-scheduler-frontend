import { defineStore } from "pinia";
import api from "../services/api";

const useTimezone = defineStore("timezone", {
  state: () => {
    return {
      timezone: "",
      isLoading: false,
    };
  },
  actions: {
    async getTimezone() {
      this.isLoading = true;
      try {
        const res = await api("/timezone");
        console.log("res", res);
        this.timezone = res.data.timezone;
      } catch (error) {
        console.log(error?.message);
      } finally {
        this.isLoading = false;
      }
    },
    async setTimezone(payload) {
      try {
        api.put("/timezone", {
          timezone: payload,
        });
        this.timezone;
        location.reload();
      } catch (error) {
        console.log(error?.message);
      }
    },
  },
});

export default useTimezone;
