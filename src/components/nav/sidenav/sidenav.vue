<template>
  <aside
    class=" max-w-[250px] ease-nav-brand z-[999] fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-base-200 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
    :class="open ? sideNavOpenClassList : ''"
  >
    <div class="h-[78px]">
      <XMarkIcon
        class="w-5 h-5 absolute top-1 right-0 m-2 opacity-50 cursor-pointer xl:hidden"
        @click="$emit('changeSideNav', !open)"
        :class="open ? '' : 'hidden'"
      ></XMarkIcon>
      <div class="block px-8 py-6 m-0 text-sm whitespace-nowrap">
        <img
          src="/source/imgs/icon.svg"
          class="inline max-w-full transition-all duration-200 h-8"
          alt="main_logo"
        />
        <span class="ml-1 font-semibold transition-all duration-200"
          >YUKI BOT Dashboard</span
        >
      </div>
    </div>

    <div class="divider my-0"></div>

    <ul class="menu bg-transparent w-full">
      <Item routerLink="/dashboard" :icon="Square3Stack3DIcon"> 概况 </Item>
      <Item routerLink="/dashboard/shell" :icon="CommandLineIcon">
        控制台
      </Item>
      <Item routerLink="/dashboard/group" :icon="UserGroupIcon"> 群组 </Item>
      <Item routerLink="/dashboard/group/plugin" :icon="ArchiveBoxIcon">
        插件</Item
      >
    </ul>
  </aside>
</template>

<script>
import {
  Square3Stack3DIcon,
  CommandLineIcon,
  UserGroupIcon,
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";
import Item from "./menu_item.vue";

export default {
  props: {
    open: Boolean,
  },
  components: {
    Square3Stack3DIcon,
    CommandLineIcon,
    UserGroupIcon,
    ArchiveBoxIcon,
    ArrowsRightLeftIcon,
    XMarkIcon,
    Item,
  },
  setup() {
    return {
      Square3Stack3DIcon: Square3Stack3DIcon,
      CommandLineIcon: CommandLineIcon,
      UserGroupIcon: UserGroupIcon,
      ArchiveBoxIcon: ArchiveBoxIcon,
    };
  },
  data() {
    return {
      sideNavOpenClassList: ["translate-x-0", "shadow-soft-xl"],
    };
  },
};
</script>

<style>
</style>