<template>
    <Modal title="Shift Details" modalId="shiftModal">
        <template #body>
            <div class="mb-3">
                <label for="start" class="form-label">Start</label>
                <input type="datetime-local" class="form-control" id="start" v-model="formData.start">
            </div>
            <div class="mb-3">
                <label for="end" class="form-label">End</label>
                <input type="datetime-local" class="form-control" id="end" v-model="formData.end">
            </div>
        </template>
        <template #footer>
            <button ref="btnCloseRef" type="button" class="btn btn-secondary btn-sm"
                data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary btn-sm" @click="handleSaveShift"
                :disabled="timezoneStore.isSaving">Save</button>
        </template>
    </Modal>
    <div class="mt-5">
        <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-2">
            <h3>Shifts</h3> {{ timezoneStore.timezone }}
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shiftModal">Add New</button>
        </div>
        <div class="table-responsive">
            <table class="table table-bordered mt-3">
                <thead>
                    <tr class="text-center align-middle">
                        <th>No.</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Duration</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="!shiftsStore.isLoading && shiftsStore.shifts.length > 0">
                        <tr class="text-center align-middle" v-for="(shift, index) in shiftsStore.shifts"
                            :key="shift.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ shift.start }}</td>
                            <td>{{ shift.end }}</td>
                            <td>{{ parseFloat(shift.duration).toFixed(2) }}</td>
                            <td>
                                <div class="d-flex justify-content-center gap-2 align-items-center flex-wrap">
                                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#shiftModal" @click="viewShift(shift)">Update</button>
                                    <button class="btn btn-danger btn-sm"
                                        @click="handleDelete(shift.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <tr class="text-center"
                        v-if="!shiftsStore.error && !shiftsStore.isLoading && shiftsStore.shifts.length === 0">
                        <td colspan="5">
                            No data found
                        </td>
                    </tr>
                    <tr class="text-center" v-if="shiftsStore.isLoading">
                        <td colspan="5">
                            Loading data
                            <Loader />
                        </td>
                    </tr>
                    <tr class="text-center" v-if="!shiftsStore.isLoading && shiftsStore.error">
                        <td class="text-danger" colspan="5">
                            {{ shiftsStore.error }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import Modal from './UI/Modal.vue';
import Loader from './UI/Loader.vue';
import useShifts from "../store/shift"
import useTimezone from '../store/timezone';
import { confirmation } from "../utils/libs"
import moment from "moment-timezone";

const shiftsStore = useShifts()
const timezoneStore = useTimezone()
const btnCloseRef = ref(null)

const isUpdate = ref(false)

const formData = ref({
    id: "",
    start: "",
    end: ""
})

const resetForm = () => {
    formData.value = {
        id: "",
        start: "",
        end: ""
    }
    isUpdate.value = false
}

const handleSaveShift = async () => {
    isUpdate.value ? await shiftsStore.updateShift({ ...formData.value, timezone: timezoneStore.timezone }, formData.value.id) : await shiftsStore.createShift({ ...formData.value, timezone: timezoneStore.timezone })
    resetForm()
    btnCloseRef.value.click()
    shiftsStore.fetchShifts(timezoneStore.timezone)
}

const viewShift = (shift) => {
    formData.value = {
        id: shift.id,
        start: moment.utc(shift.rawStart).tz(timezoneStore.timezone).format("YYYY-MM-DDTHH:mm"),
        end: moment.utc(shift.rawEnd).tz(timezoneStore.timezone).format("YYYY-MM-DDTHH:mm"),
    }
    isUpdate.value = true
}

const handleDelete = (id) => {
    confirmation("Confirmation", "Are you sure to delete this?", "question",).then(async (res) => {
        if (res.isConfirmed) {
            await shiftsStore.deleteShift(id)
            shiftsStore.fetchShifts(timezoneStore.timezone)
        }
    })
}

watchEffect(async () => {
    if (timezoneStore.timezone) {
        await shiftsStore.fetchShifts(timezoneStore.timezone)
    }
})


onMounted(async () => {
    await shiftsStore.fetchShifts('Asia/Manila')
})

</script>

<style lang="scss" scoped></style>