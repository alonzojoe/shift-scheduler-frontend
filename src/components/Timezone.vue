<template>
    <Modal title="Update Timezone" modalId="timezoneModal">
        <template #body>
            <div class="mb-3">
                <label for="xtimezone" class="form-label">Timezone</label>
                <input type="text" class="form-control" id="xtimezone" v-model="inputTimezone">
            </div>
        </template>
        <template #footer>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary btn-sm" @click="handleUpdate"
                :disabled="timezoneStore.isLoading">Save</button>
        </template>
    </Modal>
    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-2">
        <h3>Current Timezone:
            <Loader v-if="timezoneStore.isLoading" />
            <span class="text-danger" v-else-if="!timezoneStore.isLoading && timezoneStore.error">{{ timezoneStore.error
                }}</span>
            <span class="text-decoration-underline" v-else>{{ timezoneStore.timezone }}</span>
        </h3>
        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#timezoneModal"
            :disabled="timezoneStore.isLoading" @click="setInputTimezone">Update Timezone</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Modal from './UI/Modal.vue';
import Loader from './UI/Loader.vue';
import useTimezone from "../store/timezone"

const timezoneStore = useTimezone()

const inputTimezone = ref("")

const setInputTimezone = () => {
    inputTimezone.value = timezoneStore.timezone
}

const handleUpdate = async () => {
    if (inputTimezone.value.trim() === "") return;
    await timezoneStore.setTimezone(inputTimezone.value)
}

onMounted(async () => {
    await timezoneStore.getTimezone()
})
</script>

<style lang="scss" scoped></style>