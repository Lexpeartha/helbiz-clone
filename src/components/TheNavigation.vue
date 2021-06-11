<template>
  <header class="bg-red-500 w-full grid">
    <div
      class="
        container
        xl:px-24
        lg:p-10
        mx-auto
        h-16
        flex
        items-center
        justify-between
      "
    >
      <router-link class="tracking-widest font-bold" to="/"
        >H&nbsp;E&nbsp;L&nbsp;B&nbsp;I&nbsp;Z</router-link
      >
      <nav
        class="
          hidden
          lg:flex
          xl:gap-24
          lg:gap-10
          tracking-wide
          uppercase
          font-normal
          text-xs
        "
      >
        <router-link
          v-for="(item, $i) in navigationItems"
          :key="$i"
          :to="item.route.path"
        >
          {{ item.text }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface INavigationItem {
  route: {
    path: string;
    name: string;
  };
  text: string;
  callback?: () => void;
}

export default defineComponent({
  setup() {
    // Mobility
    // Helbiz Kitchen
    // Helbiz Live
    // Investors
    // Unlimited
    // About
    const navigationItems: INavigationItem[] = [
      {
        route: {
          path: '/',
          name: '',
        },
        text: 'Mobility',
      },
      {
        route: {
          path: '/',
          name: '',
        },
        text: 'Helbiz Kitchen',
      },
      {
        route: {
          path: '/',
          name: '',
        },
        text: 'Investors',
      },
      {
        route: {
          path: '/',
          name: '',
        },
        text: 'Unlimited',
      },
      {
        route: {
          path: '/',
          name: '',
        },
        text: 'About',
      },
    ];

    return {
      navigationItems,
    };
  },
});
</script>

<style scoped></style>
