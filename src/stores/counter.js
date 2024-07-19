import { defineStore, acceptHMRUpdate  } from 'pinia'
import api from '../api/api.js'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 'test',
  }),
  actions: {
    async increment() {
      const response = await api.getRandomRecipe();
      this.count = response.data;
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
