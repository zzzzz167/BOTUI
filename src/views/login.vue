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
                <svg
                  class="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                  />
                </svg>
                <svg
                  class="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                  />
                </svg>
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
export default {
  data() {
    return {
      IsLight: localStorage.getItem("theme") == "light",
    };
  },
};
</script>

<style>
</style>