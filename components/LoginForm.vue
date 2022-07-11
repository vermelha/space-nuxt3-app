<template>

  <form class="mt-8" @submit.prevent="register">
    
     <div class="mb-4">
      <label class="block text-white text-xs mb-2" for="username">
        Username
      </label> 
      <input type="text" autocomplete="off" required  v-model="username" class="border bg-transparent text-white border-white w-full py-2 px-3 leading-tight focus:outline-none" id="username" placeholder="Please enter username">
    </div>
     <div class="mb-4">
      <label class="block text-white text-xs mb-2" for="email">
        Email
      </label> 
      <input type="text" autocomplete="off" required  v-model="email" class="border bg-transparent text-white border-white w-full py-2 px-3 leading-tight focus:outline-none" id="email" placeholder="Please enter your email">
    </div>
    <div class="mb-6">
      <label class="block text-white text-xs mb-2" for="password">
        Password
      </label>
      <input  required   autocomplete="off" v-model="password" class="border bg-transparent text-white border-white w-full py-2 px-3 leading-tight focus:outline-none" id="password" type="password" placeholder="xxxxx">
    </div>

    <div class="flex items-center justify-between">
         <button :disabled="!username || !password" type="submit" class="mt-8 uppercase inline-block text-xs px-10 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white">  
          {{ loggingIn ? `Loggin' you in` : 'Sign In' }}</button>

      
    </div>

</form>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/UserStore'


export default defineComponent({
    data () {
    return {
      username: '',
      email: '',
      password: '',
      loggingIn: false
    }
  },
  methods: {
    register () {
      this.loggingIn = true
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/articles')
        })
    }
  }
});
</script>
