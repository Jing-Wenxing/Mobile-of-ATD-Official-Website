import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home')
  },
  {
    path: '/association',
    name: 'Association',
    component: () => import('../views/Association/Association')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service/Service')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop/Shop')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal/Personal')
  },
]

const router = new VueRouter({
  routes
})

export default router
