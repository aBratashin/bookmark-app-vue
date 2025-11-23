import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.ts'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/views/IndexView.vue'),
        },
        {
          path: ':alias',
          component: () => import('@/views/CategoryView.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (!authStore.getToken && to.name !== 'auth') {
    return { name: 'auth' }
  }
})
