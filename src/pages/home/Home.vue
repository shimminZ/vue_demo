<template>
  <div>
    <div class="search">
      <form action="/">
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    </div>
    <div>
      <button @click="loaction">location</button>
    </div>
  </div>
</template>

<script setup>
  
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import store from '@/store';

  const value = ref('')
  const userStore = store();
  const router = useRouter();
  const onCancel = () => {
    console.log('取消');
  };
  const onSearch = (value) => {
    console.log('搜索', value);
  };

  const loaction = () => {
    router.push('/location')
    userStore.setTabBarStatus(false)
  }

</script>

<style scoped>

</style>