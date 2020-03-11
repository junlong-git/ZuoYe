import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

//引入框架页面
import Layout from '../views/layout'; 

Vue.use(VueRouter)

const routes = [
  //登录
  {path:'/login',component:()=>import(/* webpackChunkName: "login" */ '@/views/login/index.vue')},
  //404
  {path:'/404',component:()=>import(/* webpackChunkName: "404" */ '@/views/404.vue')},
  //首页
  {path:'',component:Layout,redirect:'/home',name:'home',
	  children:[{
		  path:'home',
		  name:'myhome',
		  component:()=>import(/* webpackChunkName: "home" */ '@/views/home/index')
		}]
  },
]

const router = new VueRouter({
  routes
})

export default router
