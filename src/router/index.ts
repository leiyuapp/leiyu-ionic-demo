import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const componentRoutes: Array<RouteRecordRaw> = [
  {
    path: '/components/action-sheet',
    component: () => import('../views/components/ActionSheet.vue')
  },
  {
    path: '/components/alert',
    component: () => import('../views/components/Alert.vue')
  },
  {
    path: '/components/badge',
    component: () => import('../views/components/Badge.vue')
  },
  {
    path: '/components/button',
    component: () => import('../views/components/Button.vue')
  },
  {
    path: '/components/ripple-effect',
    component: () => import('../views/components/RippleEffect.vue')
  },
  {
    path: '/components/card',
    component: () => import('../views/components/Card.vue')
  },
  {
    path: '/components/checkbox',
    component: () => import('../views/components/Checkbox.vue')
  },
  {
    path: '/components/chip',
    component: () => import('../views/components/Chip.vue')
  },
  {
    path: '/components/content',
    component: () => import('../views/components/Content.vue')
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
