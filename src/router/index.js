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
    path: '/home/search',
    name: 'Home_search',
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
    path: '/service/video/base',
    name: 'Service_video_base',
    component: () => import('../views/Service/video/video_base')
  },
  {
    path: '/service/video/topic',
    name: 'Service_video_topic',
    component: () => import('../views/Service/video/video_topic')
  },
  {
    path: '/service/video/other',
    name: 'Service_video_other',
    component: () => import('../views/Service/video/video_other')
  },
  {
    path: '/service/search',
    name: 'Service_search',
    component: () => import('../views/Service/component/search')
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
    name: 'Software_download',
    component: () => import('../components/Software/software_download')
  },
  {
    path: '/microservice/open',
    name: 'Microservice_open',
    component: () => import('../components/Microservice/microservice_open')
  },
]

const router = new VueRouter({
  routes
})

export default router
