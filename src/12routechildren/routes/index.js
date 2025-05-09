import { createRouter, createWebHashHistory } from 'vue-router'

const home = () => import('../views/Home.vue')
const about = () => import('../views/About.vue')

const routesPath = [
  { 
    path: '/home', 
    component: home,
    children: [
      {
        path: 'homeBanner',
        component: () => import('@/12routechildren/views/HomeBanner.vue'),
      },
      {
        path: 'homeMessage',
        component: () => import('@/12routechildren/views/HomeMessage.vue'),
      }
    ]
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/user',
    component: () => import('@/12routechildren/views/User.vue'),
  },
  {
    path: '/login',
    component: () => import('@/12routechildren/views/Login.vue'),
  }
]

const routes = createRouter({
  history: createWebHashHistory(),
  routes: routesPath
})


// 导航守卫功能
routes.beforeEach((to, from) => {
  console.log('beforeEach to', to.path, "beforeEach from", from.path)
  const token = localStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    return '/login'
  }
})

export default routes