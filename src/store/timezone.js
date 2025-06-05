import { defineStore } from "pinia";
import api from "../services/api";
import { swal } from "../utils/libs";

const useTimezone = defineStore("timezone", {
  state: () => {
    return {
      timezone: "",
      isLoading: false,
      error: null,
    };
  },
  actions: {
    async getTimezone() {
      this.isLoading = true;
      this.error = null;
      try {
        const res = await api("/timezone");
        console.log("res", res);
        this.timezone = res.data.timezone;
      } catch (error) {
        this.error = "Something went wrong.";
        console.log(error?.message);
      } finally {
        this.isLoading = false;
      }
    },
    async setTimezone(payload) {
      this.isLoading = true;
      try {
        await api.put("/timezone", {
          timezone: payload,
        });
        this.timezone;
        swal("Message", "Timezone updated successfully!", "success").then(
          () => {
            location.reload();
          }
        );
      } catch (error) {
        console.log(error?.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default useTimezone;
