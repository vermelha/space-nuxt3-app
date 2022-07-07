<template>
  <div class="hero flex items-center relative bg-cover bg-no-repeat h-screen" style="background-image:url('/assets/img/nasa-CpHNKNRwXps-unsplash.jpeg')">
   
    <div class="container relative z-10 mx-auto flex items-center md:-mt-16">
<div class="flex flex-col items-start">
  <span class="uppercase text-sm block -mt-8">Join Us for more</span>
   
   <div class="uppercase text-4xl md:text-7xl font-bold pt-3">Space 
     <div class="word inline-block">
    <span> news</span>
    <span> reports</span>
    <span> blogs</span>
    <span> launches</span>
    </div>
  </div>

<form class="mt-8" @submit.prevent="login">
    
     <div class="mb-4">
      <label class="block text-white text-xs mb-2" for="username">
        Username
      </label> 
      <input type="text" required  v-model="user.username" class="border bg-transparent text-white border-white w-full py-2 px-3 leading-tight focus:outline-none" id="username" placeholder="Please enter username">
    </div>
    <div class="mb-6">
      <label class="block text-white text-xs mb-2" for="password">
        Password
      </label>
      <input  required  v-model="user.password" class="border bg-transparent text-white border-white w-full py-2 px-3 leading-tight focus:outline-none" id="password" type="password" placeholder="xxxxx">
    </div>

    <div class="flex items-center justify-between">
         <button :disabled="!user.username || !user.password" type="submit" class="mt-8 uppercase inline-block text-xs px-10 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white">  
          {{ loggingIn ? `Loggin' you in` : 'Sign In' }}</button>

      
    </div>

</form>


</div>
</div>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/UserStore'


export default defineComponent({
   setup() {
    const user = useUserStore()
    
    let loggingIn = false;

    function login(){
      user.addUser(user);
      this.loggingIn = true
      
    }


    return { user, loggingIn, login}
  }
});
</script>




<style scoped>
.word span{
  position: absolute;
  top: 0;
  overflow: hidden;
    animation: word-change 8s ease-in-out infinite;
    opacity: 0;
}

@keyframes word-change {
  0%{
    opacity: 0;
    transform: translateY(-16px);
  }
    2%{
      opacity: 1;
      transform: translateY(0px);
    }18%{
      opacity: 1;
      transform: translateY(0px);
    }
      20%{
        opacity: 0;
        transform: translateY(16px);
      }100%{
        opacity: 0;
        transform: translateY(16px);
      }
}
.word span:nth-child(1){
  animation-delay:0s;
}
.word span:nth-child(2){
  animation-delay:2s;
}
.word span:nth-child(3){
  animation-delay:4s;
}
.word span:nth-child(4){
  animation-delay:6s;
}
.hero{
  margin-top: -76px;
}
.hero:after{
  content: '';
  position: absolute;
	width: 50vw;
	height: 100%;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);	
	background-color: rgba(255, 255, 255, .1);
	backdrop-filter: blur(8px);
}


</style>
