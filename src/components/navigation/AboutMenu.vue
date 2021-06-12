<template>
  <div
    class="
      grid
      bg-white
      text-black
      pt-16
      absolute
      top-0
      left-0
      h-screen
      w-screen
      z-30
    "
  >
    <div class="lg:container xl:px-24 lg:px-10 py-10 px-6 mx-auto">
      <CloseIcon
        class="cursor-pointer float-right h-10"
        @mouseenter="activateCloseButton"
        @mouseleave="deactivateCloseButton"
        @click="$emit('close')"
        :isBlue="isCloseButtonActive"
      />
      <ul
        class="
          flex flex-col
          text-xl
          lg:text-2xl
          xl:text-5xl
          space-y-10
          font-semibold
        "
      >
        <li v-for="(link, $i) in links" :key="$i">
          <router-link to="/" class="animate-to-blue">
            {{ link }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import CloseIcon from '../icons/CloseIcon.vue';

export default defineComponent({
  components: {
    CloseIcon,
  },
  setup() {
    const links: string[] = [
      'About',
      'Company Info',
      'Sustainability',
      'Safety',
      'Partners',
      'Newsroom',
      'Cities',
      'Advertising',
      'Support',
    ];

    const isCloseButtonActive = ref(false);

    const activateCloseButton = () => {
      isCloseButtonActive.value = true;
    };

    const deactivateCloseButton = () => {
      isCloseButtonActive.value = false;
    };

    return {
      links,
      isCloseButtonActive,
      activateCloseButton,
      deactivateCloseButton,
    };
  },
});
</script>

<style scoped>
.animate-to-blue {
  @apply transition-colors cursor-pointer duration-150 hover:text-blue-500;
}
</style>
