import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Login from "@/views/login"
import Home from "@/views/home"

//二级路由
import Start from "@/views/home/start"
import Cai from "@/views/home/cai"
import Dingdan from "@/views/home/Dingdan"
import Car from "@/views/home/Car"
import My from "@/views/home/my"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path:"/home",
      name:"Home",
      component:Home,
      children:[
        {
          path:"/home/start",
          component:Start
        },{
          path:"/home/cai",
          component:Cai
        },{
          path:"/home/dingdan",
          component:Dingdan
        },{
          path:"/home/car",
          component:Car
        },{
          path:"/home/my",
          component:My
        }
      ]
    },{
      path:"*",
      redirect:"/home/cai"
    }
  ]
})
