<template>
  <button class="bg-black text-white p-4">
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
