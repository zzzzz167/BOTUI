import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const defaultTitle = 'YUKI'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = typeof to.meta?.title === 'string' ? to.meta.title + ' | YUKI' : defaultTitle
    next()
})

export default router