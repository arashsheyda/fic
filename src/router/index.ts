import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Setting up page routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../pages/admin/index.vue')
  },
]

// Creating the router instance
export const router = createRouter({
  routes,
  history: createWebHistory(), // Using web history mode for clean URLs
})

