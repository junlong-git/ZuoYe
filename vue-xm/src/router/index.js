import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	redirect:'/page'
  },
  //首页
  {
  	path: '/page',
  	name: 'page',
  	component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
  },
  
  //发现
  {
    path: '/discover',
    name: 'discover',
    component: () => import(/* webpackChunkName: "discover" */ '../views/Discover.vue')
  },
  
  //我的
  {
	path: '/mine',
	name: 'mine',
	component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  },
  
  //消息
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
