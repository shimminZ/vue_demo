<template>
  <div>
    <h2>首页</h2>
    <NotiPage></NotiPage>
    <BannerPage></BannerPage>
  </div>
</template>

<script>
import BannerPage from './BannerPage.vue';
import NotiPage from './NotiPage.vue';
export default {
  components: {
    BannerPage,
    NotiPage,
  },
}
</script>