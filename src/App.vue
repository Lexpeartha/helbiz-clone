<template>
  <div class="font-plex relative">
    <!-- All full-screen menus will be teleported to the menu below -->
    <div id="fullscreen-window"></div>
    <TheNavigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavigation from '@/components/navigation/TheNavigation.vue';

export default defineComponent({
  components: {
    TheNavigation,
  },
});
</script>

<style></style>
