<template>
  <TheNavigation />
  <router-view />
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

<style>
* {
  @apply font-plex;
}
</style>
