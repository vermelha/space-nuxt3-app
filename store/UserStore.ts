import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null
  }),
  getters: {
  
  },
  actions: {
    register(data) {
      
      this.user.push({ data, id: this.id++, loggedIn: true })
      localStorage.setItem( 'username', JSON.stringify(data))
    },
  },
})

