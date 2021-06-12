<template>
  <div class="font-plex">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavigation from '@/components/TheNavigation.vue';

export default defineComponent({
  components: {
    TheNavigation,
  },
});
</script>

<style></style>
