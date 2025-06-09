<script setup>
import Navbar from './components/Navbar.vue';
import Timezone from './components/Timezone.vue';
import Shifts from './components/Shifts.vue';
import Loader from './components/UI/Loader.vue';
import useTimezone from './store/timezone';

const timezoneStore = useTimezone()

</script>

<template>
  <Navbar />
  <div class="container" style="padding-top: 4rem;">
    <Timezone />
    <p v-if="!timezoneStore.timezone" class="mt-4 fs-5 text-center">Waiting for timezone
      <Loader />
    </p>
    <Shifts v-else />
  </div>
</template>

<style scoped></style>
