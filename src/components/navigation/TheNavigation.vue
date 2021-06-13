<template>
  <header class="bg-white fixed top-0 right-0 left-0 w-full grid z-50">
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
        z-40
      "
    >
      <router-link class="tracking-wider font-bold" to="/"
        >H&nbsp;E&nbsp;L&nbsp;B&nbsp;I&nbsp;Z</router-link
      >
      <nav
        class="
          hidden
          lg:flex
          items-center
          xl:gap-16
          lg:gap-8
          tracking-wide
          uppercase
          font-normal
          text-xs
          justify-self-end
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
      <div class="lg:hidden">
        <BaseButton
          class="justify-self-end mr-4 text-sm"
          v-if="isMobileNavOpen"
        >
          Login
        </BaseButton>
        <transition mode="out-in">
          <HamburgerIcon
            v-if="!isMobileNavOpen"
            class="block lg:hidden h-6 cursor-pointer z-50"
            @click="openMobileNav"
          />
          <CloseIcon
            v-else
            :isThin="true"
            class="cursor-pointer float-right h-10 z-50"
            @click="closeMobileNav"
          />
        </transition>
      </div>

      <teleport
        :disabled="!isAboutMenuOpen"
        v-if="isAboutMenuInteractive"
        to="#fullscreen-window"
      >
        <transition appear name="slide">
          <AboutMenu @close="closeAboutMenu" v-if="isAboutMenuOpen" />
        </transition>
      </teleport>

      <teleport
        :disabled="!isMobileNavOpen"
        v-if="isMobileNavOpen"
        to="#fullscreen-window"
      >
        <MobileNav @close="closeMobileNav" v-if="isMobileNavOpen" />
      </teleport>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import AboutMenu from './AboutMenu.vue';
import MobileNav from './MobileNav.vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';

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
    HamburgerIcon,
    CloseIcon,
    MobileNav,
  },
  setup() {
    const isAboutMenuOpen = ref(false);
    const isMobileNavOpen = ref(false);

    const isAboutMenuInteractive = ref(false);

    const activateAboutMenu = () => {
      isAboutMenuInteractive.value = true;
    };

    const openAboutMenu = () => {
      isAboutMenuOpen.value = true;
      activateAboutMenu();
    };

    const closeAboutMenu = () => {
      isAboutMenuOpen.value = false;
      activateAboutMenu();
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

    const closeAll = () => {
      closeAboutMenu();
      closeMobileNav();
    };

    window.addEventListener('resize', closeAll);

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
        text: 'Helbiz Live',
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
      isAboutMenuInteractive,
      isAboutMenuOpen,
      isMobileNavOpen,
      openMobileNav,
      closeMobileNav,
      closeAboutMenu,
      closeAll,
      navigationItems,
      handleNavItemClick,
    };
  },
});
</script>

<style scoped>
.slide-enter-active {
  animation: slide-from-top 0.3s;
  animation-timing-function: ease-in-out;
}

.slide-leave-active {
  animation: slide-from-top 0.3s reverse;
  animation-timing-function: ease-in-out;
}

@keyframes slide-from-top {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
