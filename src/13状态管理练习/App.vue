<template>
  <div>
    <h2>状态管理 练习</h2>

    <div class="person">
      <h3>person</h3>
      <div class="act">
        <h3>运动内容</h3>
        <p>运动次数: {{ $store.state.sport.sportCont }}</p>
        <p>运动项目: {{ $store.state.sport.currentActName }}</p>

        <span>{{ result }}</span>

        <button @click="run">跑步</button>
        <button @click="basetball">篮球</button>
        <button @click="gohiking">爬山</button>
        <button @click="timeLater">2天后去游泳</button>
        <button @click="goalCount">目标次数</button>
      </div>

      <div class="life">
        <h3>生活内容</h3>
        <p>计划事项: {{ $store.state.life.planName }}</p>
        <button @click="read">阅读</button>
        <button @click="clickBall">台球</button>
        <button @click="goTravel">旅游</button>
      </div>

      <div class="work">
        <h3>工作内容</h3>
      </div>
    </div>

    
  </div>
</template>

<script setup>

import { ref,  } from 'vue';
import { useStore } from 'vuex';

  const store = useStore();
  const result = ref("")

  const run = () => {
    store.commit("sport/run",'跑步');
  }
  const basetball = () => {
    store.commit("sport/basketBall",'打篮球');
  }
  const gohiking = () => {
    store.commit("sport/goHiking",'爬山');
  }
  const timeLater = () => {
    store.dispatch("sport/swimMing",'游泳').then(res => {
      console.log(res);
    })
  }
  const goalCount = () => {
    const item = store.getters['sport/sportGoalTime'](2)
    result.value = item // 更新响应式数据
  }

  
  const read = () => {
    store.commit("life/read",'阅读');
  }
  const clickBall = () => {
    store.commit("life/clickBall",'打台球');
  }
  const goTravel = () => {
    store.commit("life/goTravel",'旅游');
  }


</script>

<style>
.person {
  padding: 10px;
  border:  1px solid tomato;
}
.act {
  padding: 10px;
  border:  1px solid tomato;
}

.life {
  margin-top: 10px;
  padding: 10px;
  border:  1px solid tomato;
}

.work{
  margin-top: 10px;
  padding: 10px;
  border:  1px solid tomato;
}
</style>