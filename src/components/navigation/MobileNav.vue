<template>
  <div class="bg-white pt-16 absolute top-0 left-0 h-screen w-screen z-40">
    <div class="relative flex bg-gray-100">
      <button @click="selectProduct" class="selection-button">
        Our Product
        <div v-if="isProductSelected" class="marker"></div>
      </button>
      <button @click="selectCompany" class="selection-button">
        Our Company
        <div v-if="!isProductSelected" class="marker"></div>
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <ul v-if="isProductSelected" class="menu-list">
        <li class="menu-link" v-for="(item, $i) in ourProductList" :key="$i">
          <router-link to="/">{{ item }}</router-link>
        </li>
      </ul>
      <ul class="menu-list" v-else>
        <li class="menu-link" v-for="(item, $i) in ourCompanyList" :key="$i">
          <router-link to="/">{{ item }}</router-link>
        </li>
      </ul>
    </transition>

    <hr class="mx-5" />
    <ul class="menu-list">
      <li class="menu-link">
        <router-link to="/">Privacy Policy</router-link>
      </li>
      <li class="menu-link">
        <router-link to="/">Contact Us</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isProductSelected = ref(true);

    const selectProduct = () => {
      isProductSelected.value = true;
    };

    const selectCompany = () => {
      isProductSelected.value = false;
    };

    const ourProductList: string[] = [
      'Mobility',
      'Helbiz Kitchen',
      'Helbiz Live',
      'Investors',
      'Unlimited',
    ];

    const ourCompanyList: string[] = [
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

    return {
      isProductSelected,
      ourProductList,
      ourCompanyList,
      selectProduct,
      selectCompany,
    };
  },
});
</script>

<style scoped>
.selection-button {
  @apply relative py-5 pl-5 font-semibold tracking-tight focus:outline-none;
}

.menu-list {
  @apply space-y-6 p-5;
}

.menu-link {
  @apply font-bold;
}

.marker {
  @apply absolute bottom-0 border-t border-blue-500 border-2 w-4/5 pr-5;
}

.fade-enter-active {
  animation: fade 450ms;
  animation-timing-function: ease-out;
}

.fade-leave-active {
  animation: fade 450ms reverse;
  animation-timing-function: ease-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}
</style>
