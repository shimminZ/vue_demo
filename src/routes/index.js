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
      path: "/profile", 
      component: () => import('../pages/profile/Profile.vue')
    },
  ]
})

export default routes;