<template>
    <Modal title="Update Timezone" modalId="timezoneModal">
        <template #body>
            <div class="mb-3">
                <label for="xtimezone" class="form-label">Timezone</label>
                <input type="text" class="form-control" id="xtimezone">
            </div>
        </template>
        <template #footer>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary btn-sm">Save</button>
        </template>
    </Modal>
    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-2">
        <h3>Current Timezone: <span class="text-decoration-underline">Asia/Manila</span></h3>
        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#timezoneModal">Update Timezone</button>
    </div>
</template>

<script setup>
import Modal from './UI/Modal.vue';
</script>

<style lang="scss" scoped></style>