import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => ({
    count: 0,
    name: "小明",
    age: 18,
    list: [
      { id: 1, name: "小明" },
      { id: 2, name: "小红" },
      { id: 3, name: "小刚" },
    ],
  }),
  getters: {
    getName(state) {
      return state.name;
    },
    getAge(state) {
      return state.age;
    },
  },
  actions: {
    addNum(num) {
      console.log("addNum == ", num);
      this.count = this.count + num
    },
    changeName(name) {
      this.name = name;
    }
  },
});

export default useStore