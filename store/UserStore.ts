import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    username: null,
    password: null,
    id: 0,
    loggedIn: false,
    user: null
  }),
  getters: {
  
  },
  actions: {
    addUser(userData) {
      this.user.push(userData)
      localStorage.setItem('user', JSON.stringify(userData))
    },
  },
})

