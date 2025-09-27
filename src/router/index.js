import { createRouter, createWebHistory } from 'vue-router'

import Products from '@/pages/products.vue'
import Cart from '@/pages/cart.vue'

const routes = [
  { path: '/', name: 'products', component:Products },
  { path: '/cart', name: 'Cart', component: Cart },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
