<template>
    
    <div class="tabBar">
      <van-tabbar v-model="tabIndex">
        <van-tabbar-item v-for="item in tabbarData" :to="item.path" :key="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img  :src="getAssetURL(item.imageActive)" alt="" v-if="props.active">
            <img  :src="getAssetURL(item.image)" alt="" v-else>
          </template>
        </van-tabbar-item>
          
      </van-tabbar>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import tabbarData from '@/assets/tabbar';
import { getAssetURL } from '@/utils/load_asset.js';

import tabHome from '@/assets/img/tabbar/tab_home.png' // 注意 @ 代表 src 目录
import tabActiveHome from '@/assets/img/tabbar/tab_home_active.png' // 注意 @ 代表 src 目录

const router = useRouter();
const tabIndex = ref(0);
</script>

<style lang="less" scoped>

.tabBar {

  //修改tabbar中icon的大小
    // 局部定义一个变量: 只针对.tab-bar子元素才生效
    // --van-tabbar-item-icon-size: 30px !important;

    // 找到类, 对类中的CSS属性重写
    // :deep(.class)找到子组件的类, 让子组件的类也可以生效
    // :deep(.van-tabbar-item__icon) {
    //   font-size: 30px;
    // }

    .van-tabbar-item--active {
      color: orange;
    }

}

</style>