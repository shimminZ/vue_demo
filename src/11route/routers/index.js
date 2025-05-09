

import { createRouter, createWebHashHistory} from "vue-router"

//路由的懒加载,分包处理。
// webpackChunkName: 'person' 代表这个路由的分包名称
// webpackChunkName: 'home' 代表这个路由的分包名称
const home = () => import(/*webpackChunkName: 'home' */"../Home.vue")
const personal = () => import(/*webpackChunkName: 'person' */"../Personal.vue")
const user = () => import(/*webpackChunkName: 'person' */"../User.vue")

// name路由的唯一标识
const router = [
  {
    path: "/",
    name: "index",
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: home
  },
  {
    path: "/personal",
    name: 'Personal',
    component:personal
  },
  
  // 动态路由
  // 动态路由的参数是通过 :id 来定义的
  // 访问这个路由时，传入的参数会被解析到 $route.params 中
  // 例如访问 /user/1 时，$route.params.id 的值为 1
  {
    path: "/user/:id",
    name: 'User',
    component:user
  }
]

const routers =  createRouter({
  // 这里使用createWebHashHistory创建。链接会带有#号
  // 例如 http://localhost:8080/#/home
  // 这里使用createWebHistory创建。链接不会带有#号
  // 例如 http://localhost:8080/home
  history: createWebHashHistory(),
  routes: router
})

export default routers