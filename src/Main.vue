<template>
  <div class="main m-0 text-base leading-default h-full bg-base-100">
    <SideNav :open="isOpen" @change-side-nav="changeSide"></SideNav>
    <main
      class="ease-spft-in-out xl:ml-[17.125rem] relative h-fit rounded-xl transition-all duration-200">
      <NavBar :sideNavOpen="isOpen" @change-side-nav="changeSide"></NavBar>
      <div class="w-full px-6 pt-6 mx-auto">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
        <Footer></Footer>
      </div>
    </main>
  </div>
</template>

<script>
import SideNav from "@/components/nav/sidenav/sidenav.vue";
import NavBar from "@/components/nav/navbar/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  data() {
    return{
      isOpen: false
    }
  },
  components: {
    SideNav,
    NavBar,
    Footer,
  },
  methods: {
    changeSide(n) {
      this.isOpen = n;
    },
  },
};
</script>

<style>
</style>