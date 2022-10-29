<template>
  <nav
    class="relative flex flex-wrap items-center justify-between transition-all shadow-none duration-[250ms] ease-soft-in rounded-2xl px-0 py-2 mx-6 lg:flex-nowrap lg:justify-start"
    :class="navIsTop ? navScrollClassList : ''">
    <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
      <nav class="text-sm breadcrumbs">
        <ul>
          <template v-for="(item, index) in $route.path.split('/')" :key="index">
            <li v-if="index !== 0 && index !== $route.path.split('/').length - 1">
              <router-link :to="$route.path.slice(0, $route.path.lastIndexOf(item) + item.length)">
                {{ item }}
              </router-link>
            </li>
            <li v-if="index == $route.path.split('/').length - 1">
              {{ item }}
            </li>
          </template>
        </ul>
        <h6 class="mb-0 font-bold capitalize">
          {{ $route.path.split("/")[$route.path.split("/").length - 1] }}
        </h6>
      </nav>
      <div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
        <label class="swap swap-rotate mr-2 ml-auto">
          <input
            type="checkbox"
            data-toggle-theme="light,dracula"
            data-act-class="ACTIVECLASS"
            :checked="IsLight"
          />
          <SunIcon class="swap-on fill-current w-6 h-6"></SunIcon>
          <MoonIcon class="swap-off fill-current w-6 h-6"></MoonIcon>
        </label>

        <label class="swap swap-rotate mr-2 xl:hidden">
          <input type="checkbox" :checked="sideNavOpen" @click="sideNavOpen = !(sideNavOpen);$emit('changeSideNav', sideNavOpen);"/>
          <Bars3Icon class="swap-off fill-current w-6 h-6"></Bars3Icon>
          <Bars3BottomRightIcon class="swap-on fill-current w-6 h-6"></Bars3BottomRightIcon>
        </label>

        <div class="dropdown dropdown-hover dropdown-end ml-1">
          <div class="avatar online items-center">
            <div class="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/source/imgs/avater.jpg" />
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
            <li><a>UserInfo</a></li>
            <li><a>Login out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { MoonIcon, SunIcon, Bars3Icon, Bars3BottomRightIcon} from '@heroicons/vue/24/outline'
export default {
  components: { MoonIcon, SunIcon, Bars3Icon, Bars3BottomRightIcon },
  props: {
    sideNavOpen: Boolean
  },
  data() {
    return {
      navScrollClassList: [
        "sticky",
        "top-[1%]",
        "backdrop-saturate-[200%]",
        "backdrop-blur-[30px]",
        "notop",
        "shadow-blur",
        "z-110",
      ],
      navIsTop: false,
      IsLight: localStorage.getItem("theme") == "light",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 5) {
        this.navIsTop = true;
      } else {
        this.navIsTop = false;
      }
    },
  },
};
</script>

<style>
nav.notop{
  background-color: hsl(var(--b3)/0.8);
}
</style>