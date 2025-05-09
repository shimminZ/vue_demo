import { defineStore } from 'pinia'
export const useMyStore = defineStore('myStore', {
  state: () => ({
    message: ''
  })
})

let list = [
  { id: 1, name: '小明' },
  { id: 2, name: '小红' },
  { id: 3, name: '小刚' }
]
list.splice(0, 1)

// splice 