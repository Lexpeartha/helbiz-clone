<template>
  <header class="fixed top-0 right-0 left-0 w-full grid z-40">
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
        <a
          v-for="(item, $i) in navigationItems"
          @click="handleNavItemClick(item)"
          class="cursor-pointer"
          :key="$i"
        >
          {{ item.text }}
        </a>
        <BaseButton>Login</BaseButton>
      </nav>
      <img
        class="block lg:hidden h-4 cursor-pointer"
        @click="openMobileNav"
        :src="require('@/assets/icons/hamburger.svg')"
        alt="Hamburger"
      />

      <teleport :disabled="!isAboutMenuOpen" to="#fullscreen-window">
        <!-- <transition
          enter-active-class="transform transition duration-300 ease-in-out"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-in-out"
          leave-class="translate-y-0 scale-y-100 opacity-100"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
        </transition> -->
        <AboutMenu v-if="isAboutMenuOpen" />
      </teleport>

      <teleport
        :disabled="!isMobileNavOpen"
        v-if="isMobileNavOpen"
        to="#fullscreen-window"
      ></teleport>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import AboutMenu from './AboutMenu.vue';

interface INavigationItem {
  route: {
    path: string;
    name: string;
  };
  text: string;
  callback?: () => void;
}

export default defineComponent({
  components: {
    AboutMenu,
  },
  setup() {
    const isAboutMenuOpen = ref(false);
    const isMobileNavOpen = ref(false);

    const openAboutMenu = () => {
      isAboutMenuOpen.value = true;
    };

    const closeAboutMenu = () => {
      isAboutMenuOpen.value = false;
    };

    const toggleAboutMenu = () => {
      isAboutMenuOpen.value ? closeAboutMenu() : openAboutMenu();
    };

    const openMobileNav = () => {
      isMobileNavOpen.value = true;
    };

    const closeMobileNav = () => {
      isMobileNavOpen.value = false;
    };

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
        callback: toggleAboutMenu,
      },
    ];

    const router = useRouter();

    const handleNavItemClick = (item: INavigationItem) => {
      if (item.callback) {
        item.callback();
      }

      router.push(item.route.path);
    };

    return {
      isAboutMenuOpen,
      isMobileNavOpen,
      openMobileNav,
      closeMobileNav,
      navigationItems,
      handleNavItemClick,
    };
  },
});
</script>

<style scoped></style>
