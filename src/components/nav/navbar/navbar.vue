<template>
  <div
    class="
      navbar
      relative
      flex-wrap
      justify-between
      shadow-none
      duration-[250ms]
      ease-soft-in
      rounded-2xl
      lg:flex-nowrap lg:justify-start
    "
    :class="navIsTop ? navScrollClassList : ''"
  >
    <div class="text-sm breadcrumbs">
      <ul>
        <template v-for="(item, index) in $route.path.split('/')" :key="index">
          <li v-if="index !== 0 && index !== $route.path.split('/').length - 1">
            <a
              :href="
                $route.path.slice(
                  0,
                  $route.path.lastIndexOf(item) + item.length
                )
              "
              >{{ item }}</a
            >
          </li>
          <li v-if="index == $route.path.split('/').length - 1">{{ item }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navScrollClassList: [
        "sticky",
        "top-[1%]",
        "backdrop-saturate-[200%]",
        "backdrop-blur-[30px]",
        "bg-[hsla(0,0%,100%,0.8)]",
        "shadow-blur",
        "z-110",
      ],
      navIsTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 2) {
        this.navIsTop = true;
      } else {
        this.navIsTop = false;
      }
    },
  },
};
</script>

<style>
</style>