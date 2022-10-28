<template>
  <div class="main m-0 text-base leading-default h-full bg-base-100">
    <SideNav></SideNav>
    <main
      class="
        ease-spft-in-out
        xl:ml-[17.125rem]
        relative
        h-full
        max-h-screen
        rounded-xl
        transition-all
        duration-200
      "
    >
      <NavBar></NavBar>
      <div>
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
  components: {
    SideNav,
    NavBar,
    Footer,
  },
};
</script>

<style>
</style>