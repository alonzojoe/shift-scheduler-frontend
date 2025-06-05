<template>
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <div>
                <a class="navbar-brand" href="">Shift Scheduler</a>

            </div>


            <div class="d-flex align-items-center gap-1">
                <div class="icon-container border border-secondary rounded p-1 cursor-pointer" @click="toggleTheme">
                    <i class="bx fs-3" :class="theme === 'dark' ? 'bx-sun' : 'bx-moon'"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { getLocalStorage, setLocalStorage } from "../utils/libs"
import { ref, onMounted } from "vue";

const theme = ref(getLocalStorage('theme') || 'dark')


const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme.value);
    setLocalStorage('theme', theme.value);
};

onMounted(() => {
    document.documentElement.setAttribute('data-bs-theme', theme.value);
});


</script>

<style lang="scss" scoped></style>