import { createRouter, createWebHashHistory } from "vue-router";

const routes =  createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: "/", 
      component: () => import('../pages/home/Home.vue')
    },
    { 
      path: "/home", 
      component: () => import('../pages/home/Home.vue')
    },
    { 
      path: "/favor", 
      component: () => import('../pages/favor/Favor.vue')
    },
    { 
      path: "/order", 
      component: () => import('../pages/order/Order.vue')
    },
    { 
      path: "/profile", 
      component: () => import('../pages/profile/Profile.vue')
    },
    { 
      path: "/location", 
      component: () => import('../pages/home/location/Location.vue')
    },
  ]
})

export default routes;