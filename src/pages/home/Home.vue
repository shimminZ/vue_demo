<template>
  <div class="home">
    <NavBar>
      <span>首页</span>
    </NavBar>
    <div>
      <img class="banner" :src="banner" alt="">
      <button @click="loaction">location</button>
    </div>

    <div class="bottom" >
      <p v-for="item in 100">首页{{ item }}</p>
    </div>
  </div>
</template>

<script setup>
  
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import store from '@/store';
  import NavBar from '@/components/nav/NavBar.vue';
  import banner from '@/assets/img/home/banner.webp' // 注意 @ 代表 src 目录

  const value = ref('')
  const userStore = store();
  const router = useRouter();
  
  const loaction = () => {
    router.push('/location')
    userStore.setTabBarStatus(false)

    const date = new Date()
    console.log( "date = ",date)
  }

</script>

<style lang="less" scoped>

.home {

  .nav {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f5f5f5;
    font-size: 20px;
  }

  .banner {
    width: 100%;
  }

  .bottom {
    padding-bottom: 50px;
  }

}


</style>