import { createApp } from 'vue'
// import App from './App.vue'
// import numcount from './until/abc/bbc/edc/test'
// import hobby from './until/abc/bbc/edc/hobby'
// import sum from "@/until/demo";
// import hobby from '@/until/abc/bbc/edc/hobby'

// import App from './父子通信/App.vue'
// import App from './插槽/App.vue'
// import App from './父子通信依赖注入/App.vue'
// import App from './兄弟组件间通信/App.vue'

// import App from './5生命周期/App.vue'

// import App from './4兄弟组件间通信/App.vue'

// import App from './6ref/App.vue'

// import App from './4.02动态组件/App.vue'

// import App from './7组件vmodel/App.vue'

// import App from './8setup模式/App.vue'

// import App from './9setup模式 Provide/App.vue'

// import App from './10defineprops/App.vue'

// import App from './11route/App.vue'
// import App from "./12routechildren/App.vue"
// import App from "./13状态管理/App.vue"
// import App from './13状态管理练习/App.vue'

import App from './14状态管理pinia/App.vue'

import { createPinia } from 'pinia'
// import routers from './11route/routers/index.js'
import routers from './12routechildren/routes/index.js'
import store from './13状态管理练习/store/index.js'

// const fn = hobby
// const wear =  fn()
// console.log(wear)
// console.log(numcount)
// console.log(sum)
const app = createApp(App)
const pinia = createPinia()
app.use(pinia) // ✅ 挂载 pinia
app.use(routers) // ✅ 挂载插件
app.use(store) // ✅ 挂载插件
app.mount('#app')
