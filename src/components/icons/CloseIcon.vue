<template>
  <svg
    v-if="isThin"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.428993 0.929039L14.5711 15.0712"
      :stroke="isBlue ? blue500hex : 'black'"
    />
    <path
      d="M0.429039 15.0711L14.5712 0.928994"
      :stroke="isBlue ? blue500hex : 'black'"
    />
  </svg>

  <svg
    v-else
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="transition-all"
      d="M16.4957 12.253L6.24264 2L2 6.24264L12.253 16.4957L2 26.7487L6.24264 30.9914L16.4957 20.7383L26.7487 30.9914L30.9914 26.7487L20.7383 16.4957L30.9914 6.24264L26.7487 2L16.4957 12.253Z"
      :fill="isBlue ? blue500hex : 'black'"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isBlue: {
      type: Boolean,
      default: false,
    },
    isThin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blue500hex: '#3B82F6',
    };
  },
});
</script>
