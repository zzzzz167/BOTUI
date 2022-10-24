<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { onMounted } from "vue";
import { themeChange } from "theme-change";
export default {
  setup() {
    if (!localStorage.getItem("theme")) {
      var hours = new Date().getHours();
      if (hours >= 18 || (hours >= 0 && hours <= 6)) {
        localStorage.setItem("theme", "dracula");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
    onMounted(() => {
        themeChange();
      });
  },
};
</script>