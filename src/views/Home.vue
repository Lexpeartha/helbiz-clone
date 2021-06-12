<template>
  <div class="home">
    <HomeHero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeHero from '@/components/home/TheHero.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeHero,
  },
});
</script>
