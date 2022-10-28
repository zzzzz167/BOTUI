<template>
  <li
    :class="{
      bordered: $route.path === routerLink,
      hidbored: $route.path !== routerLink,
    }"
  >
    <router-link
      :to="routerLink"
      :class="($route.path === routerLink) ? 'shadow-lg' : '' "
      class="rounded-md hover:shadow-lg"
    >
      <component :is="icon" class="w-5 h-5"></component>
      <slot>Item</slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    routerLink: String,
    icon: {},
  },
};
</script>

<style>
.hidbored a {
  border-left-width: 4px;
  --tw-border-opacity: 0;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}

.bordered a{
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
}
</style>