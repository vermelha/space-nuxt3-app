<template>
<div class="relative z-10 bg-transparent">
<nav class="container mx-auto flex items-center justify-between py-2">

 <div class="flex items-center text-white mr-6">
    <img class="bg-white h-8 w-8 mr-2" src="@/assets/img/logo.svg" alt="Logo">
     <NuxtLink to="/" class="uppercase py-2 text-xl font-bold flex flex-col tracking-widest">
      Space<span class="text-xs tracking-tight">adventures</span>
    </NuxtLink>
  </div>
    
  <div class="flex">
    

          
           <nuxt-link
                  class="nav-link ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                  aria-current="page"
                  to="/articles" :class="{active: $route.name==='articles'}"
                  >articles</nuxt-link
                >
                     
          <nuxt-link
                  class="nav-link ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"    b      
                  to="/" 
                  >logout</nuxt-link
                >


    </div>
  
</nav>
</div>

</template>

<style lang="scss" scoped>
.tracking-widest {
    letter-spacing: 0.16em;
}
.nav-link.active{
  background-color: #ffffff;
  color: #000000
}
</style>