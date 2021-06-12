<template>
  <header class="bg-red-500 w-full grid">
    <div
      class="
        lg:container
        xl:px-24
        lg:px-10
        px-6
        lg:mx-auto
        h-16
        w-full
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
          items-center
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
        <BaseButton>Login</BaseButton>
      </nav>
      <img
        class="block lg:hidden h-4 cursor-pointer"
        @click="openMobileNav"
        :src="require('@/assets/icons/hamburger.svg')"
        alt="Hamburger"
      />
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

    const openMobileNav = () => {
      console.log('Opening mobile nav!');
    };

    return {
      navigationItems,
      openMobileNav,
    };
  },
});
</script>

<style scoped></style>
