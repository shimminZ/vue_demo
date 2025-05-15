<template>
  <div>
    <div class="hot-city" > 
      <div class="hot-city-item" v-for="hotcity in hotCitys.hotCities" @click="clickHotCity(hotcity)">
        {{ hotcity.cityName}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits['hotCityName']

const props = defineProps({
  hotCitys: {
    type: Object,
    required: true
  }
})

const clickHotCity = (value)=>{
 console.log(value)
}

</script>

<style lang="less" scoped>

  .hot-city {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    gap: 10px; /* 项目间距 */
    padding: 10px
  }
  .hot-city-item {
    flex: calc((100% - 30px) / 4); /* 每行4个，考虑3个gap间距 */
    text-align: center;
    padding: 6px 0 6px 0;
    background-color: #fcefe9;
    border-radius: 20px;
    font-size: 14px;
    box-sizing: border-box;
  }

</style>