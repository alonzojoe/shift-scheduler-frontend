import { defineStore } from "pinia";
import Swal from "sweetalert2";
import api from "../services/api";

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
        Swal.fire({
          title: "Message",
          text: "Timezone updated successfully!",
          icon: "success",
        }).then(() => {
          location.reload();
        });
      } catch (error) {
        console.log(error?.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default useTimezone;
