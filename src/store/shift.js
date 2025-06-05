import { defineStore } from "pinia";
import api from "../services/api";
import moment from "moment-timezone";
import { swal } from "../utils/libs";

const useShifts = defineStore("shifts", {
  state: () => {
    return {
      isLoading: false,
      error: null,
      shifts: [],
      isSaving: false,
    };
  },
  actions: {
    async fetchShifts(timezone) {
      console.log("timezone", timezone);
      this.isLoading = true;
      this.error = null;
      try {
        const res = await api("/shifts", {
          params: { timezone },
        });
        console.log("res", res.data);
        this.error = null;
        this.shifts = res.data;
      } catch (error) {
        this.error = "Something went wrong.";
        console.log(error?.message);
      } finally {
        this.isLoading = false;
      }
    },
    async createShift(shift) {
      console.log(shift);
      this.isSaving = true;
      try {
        const { start, end, timezone } = shift;
        await api.post("/shifts", {
          start,
          end,
          timezone,
        });
        swal("Message", "Shift Created Successfully!", "success");
      } catch (error) {
        console.log(error.response.data.error);
        swal("Validation", error.response.data.error, "error");
      } finally {
        this.isSaving = false;
      }
    },
    async updateShift(shift, id) {
      console.log(shift);
      this.isSaving = true;
      try {
        const { start, end, timezone } = shift;
        await api.put(`/shifts/${id}`, {
          start,
          end,
          timezone,
        });
        swal("Message", "Shift Updated Successfully!", "success");
      } catch (error) {
        console.log(error.response.data.error);
        swal("Validation", error.response.data.error, "error");
      } finally {
        this.isSaving = false;
      }
    },
    async deleteShift(id) {
      try {
        await api.delete(`/shifts/${id}`);
      } catch (error) {
        console.log(error?.message);
        swal("Error", "Something went wrong", "error");
      } finally {
        this.isSaving = false;
      }
    },
  },
});

export default useShifts;
