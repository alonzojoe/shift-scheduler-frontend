<script setup>
import Navbar from './components/Navbar.vue';
import Timezone from './components/Timezone.vue';
import Shifts from './components/Shifts.vue';
</script>

<template>
  <Navbar />
  <div class="container" style="padding-top: 4rem;">
    <Timezone />
    <Shifts />
  </div>
</template>

<style scoped></style>
