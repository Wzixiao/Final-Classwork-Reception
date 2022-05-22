import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ '../views/index.vue')

const routes = [
  {
    path:"/",
    component:Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
