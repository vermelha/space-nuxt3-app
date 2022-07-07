<template>
    
        
 <div class="hero flex items-center relative bg-left" style="background-image:url('/assets/img/nasa-7Cz6bWjdlDs-unsplash.jpeg')">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase text-3xl md:text-5xl font-bold pt-3">Welcome {{ user.username }} <br> to Space Adventures</h1>
     </div>
   </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/UserStore'


export default defineComponent({
  
  setup(){
     const user = useUserStore()
     return{ user }
  }
})

</script>


<style scoped  lang="scss">
.hero{
  height: 360px;
  &:after{
  content: '';
  position: absolute;
  top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
}

</style> 