<template>


    <div v-if="isPending" class="text-center">loading...</div>
    <div v-else-if="data">
    <Article :post="data" />
    </div>
    <div v-else-if="error" class="text-center">Something went wrong: {{error.message}}</div>  
    
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useGetArticle }  from '@/composables/use-fetch'


  

export default  defineComponent({
 setup(){
    const route = useRoute();
    const {data, error, isPending} = useGetArticle(() => route.params.id);

    return {
      data,
      error,
      isPending
    }
 }

})
</script>
