<template>
  <div>
    <van-index-bar :index-list="cityFirstName(cityGroup)">
      <div v-for="(group,index) in cityGroup.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <div v-for="(city,indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cityGroup: {
    type: Object,
    required: true
  }
})

const cityFirstName = (value) => {
  return value.cities.map(item=>{
    return item.group
  })
}

</script>