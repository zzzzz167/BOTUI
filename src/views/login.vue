<template>
  <div class="main">
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <div class="card-body w-[28em]">
            <div class="card-title select-none relative">
              <img src="/source/imgs/icon.svg" alt="Icon" class="w-10" />
              登陆
              <label class="swap swap-rotate inset-y-0 right-0 absolute">
                <input
                  type="checkbox"
                  data-toggle-theme="light,dracula"
                  data-act-class="ACTIVECLASS"
                  :checked="IsLight"
                />
                <SunIcon class="swap-on fill-current w-10 h-10 text-amber-300"></SunIcon>
                <MoonIcon class="swap-off fill-current w-10 h-10"></MoonIcon>
              </label>
            </div>
            <div class="text-base-content font-medium text-sm select-none">
              BEST WISH FOR YOU!
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">用户名或邮箱</span>
              </label>
              <input
                type="text"
                class="input input-bordered border-primary focus:outline-none"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">密码</span>
                <a
                  href="/login/rest"
                  class="label-text-alt link link-hover text-primary"
                  >忘记密码?</a
                >
              </label>
              <input
                type="password"
                class="input input-bordered border-primary focus:outline-none"
              />
            </div>
            <div class="form-control">
              <label class="label cursor-pointer space-x-0 w-fit">
                <span class="label-text mr-2">记住我</span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-primary h-5 w-5"
                />
              </label>
              <a
                href="/dashboard"
                class="label-text-alt link link-hover text-primary w-fit"
                >没有账户? 随便看看👉</a
              >
            </div>
            <div class="form-control mt-3">
              <button class="btn btn-primary font-bold">Login</button>
            </div>
          </div>
          <img
            src="/source/imgs/login.jpeg"
            alt="Album"
            class="h-0 w-0 lg:w-fit lg:h-[28em]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

export default {
  components: { MoonIcon, SunIcon },
  data() {
    return {
      IsLight: localStorage.getItem("theme") == "light",
    };
  },
};
</script>

<style>
</style>