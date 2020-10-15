import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const componentRoutes: Array<RouteRecordRaw> = [
  {
    path: '/components/action-sheet',
    component: () => import('../views/components/ActionSheet.vue')
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  ...componentRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
