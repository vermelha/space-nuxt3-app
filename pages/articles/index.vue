<template>
  <div>
    <base-hero />
      
    <div class="container mx-auto mt-16 pb-36">
        
      <div  class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">

        <template v-if="isPending" class="text-center">loading...</template>
        <template v-else-if="data">
        <article-card v-for="post in data" :key="post.id" :post="post" />
        </template>
        <template v-else-if="error" class="text-center">Something went wrong: {{error.message}}</template>

      </div>

    </div>
  </div>  

</template>


<script lang="ts">

import { defineComponent } from 'vue'
import { useGetArticles }  from '@/composables/use-fetch'



export default defineComponent({
  name: 'EventList',
 setup() {
  const {data, error, isPending} = useGetArticles();

    return {
      data,
      error,
      isPending
   }
  }
 
  
}) 
</script>
