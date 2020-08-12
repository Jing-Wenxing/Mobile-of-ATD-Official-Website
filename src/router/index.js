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
    path: '/search/home',
    name: 'Search_Home',
    component: () => import('../views/Home/Search')
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
  // 公共页面
  {
    path: '/video/play',
    name: 'Video_play',
    component: () => import('../components/Video/video_playpage')
  },
  {
    path: '/software/download',
    name: 'Video_play',
    component: () => import('../components/Software/software_download')
  },
]

const router = new VueRouter({
  routes
})

export default router
