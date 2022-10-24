import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const defaultTitle = 'YUKI_BOT'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = typeof to.meta?.title === 'string' ? to.meta.title : defaultTitle
    next()
})

export default router