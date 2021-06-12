<template>
  <button class="bg-black text-white font-bold tracking-wide py-3 px-6">
    <slot>Default button text</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
