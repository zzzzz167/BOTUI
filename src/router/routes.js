import Main from '@/Main.vue'
import Dashboard from '@/views/dashboard.vue'
import Login from '@/views/login.vue'

export default [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/dashboard',
        component: Main,
        children: [
          {
            path: '',
            component: Dashboard,
            meta: {
              title: 'Dashboard',
            },
          },
          {
            path: ':catchAll(.*)',
            component: () => import('@/views/404.vue'),
            meta: {
              title: '404 Not Found',
            },
          },
        ],
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue'),
      meta: {
        title: '404 Not Found',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
      meta: {
        title: '404 Not Found',
      },
    },
]