<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <div class="items-center grid-flow-col">
      <span class="svgImg">
        <object
          id="objectSvg"
          type="image/svg+xml"
          data="/source/imgs/footericon.svg"
          class="w-9 h-9"
        ></object>
      </span>
      <p>© 2022, made with ❤️ by zzzzz167</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a class="svgImg" href="https://github.com/zzzzz167/BotUI" target="_blank"
        ><object
          id="objectSvg"
          type="image/svg+xml"
          data="/source/imgs/github.svg"
          class="w-6 h-6"
        ></object
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.svgImg {
  overflow: hidden;
}

.svgImg object,
embed {
  cursor: pointer;
  --tw-text-opacity: 1;
  filter: drop-shadow(hsl(var(--nc) / var(--tw-text-opacity)) 0px -100px);
  transform: translate(0px, 100px);
}
</style>