<template>
<div class="pb-36 flex items-center flex-col" v-if="post">
 <div class="hero flex items-center relative bg-cover relative w-full"
      :style="{ backgroundImage: `url('${post.imageUrl}')` }">
     <div class="container mx-auto relative z-10 text-left">
     <h1 class="uppercase text-2xl md:text-4xl font-bold pt-3">{{post.title}}</h1>
     </div>
   </div>


  <div class="container mx-auto mt-12 text-left">
    <p class="text-xs mb-12">Source: <span class="italic">{{post.newsSite}}</span></p>

    <p class="mb-8">
     {{post.summary}}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{ publishedAt }}</span></p>
    <p class="text-xs mb-2 ">Updated: <span>{{ updatedAt }}</span></p>
    
  </div>
  <div class="container flex justify-center flex-col md:flex-row items-center mt-6 md:mt-0">
    <a
                  class="md:mr-12 block uppercase my-2 md:my-12 text-sm px-8 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
                  :href="post.url" target="_blank"
                  >Read Full Article</a
                >

       <nuxt-link
                  class="uppercase my-2 md:my-12 text-sm px-8 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
                  to="/articles"
                  >Back to Articles</nuxt-link
                >
     </div>
  </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { ArticleItem } from '@/types'

export default defineComponent({
  props: {
    post: {
      type: Object as () => ArticleItem,
      required: true
    }
  },

   setup(props){
    const updatedAt =  new Date(props.post.updatedAt).toLocaleString(['en-US'], {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    const publishedAt =  new Date(props.post.updatedAt).toLocaleString(['en-US'], {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    return{
      publishedAt,
      updatedAt
    }
  }
})
</script>


<style scoped lang="scss">
.hero{
  height: 450px;
  &:after {
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
}
}
</style>