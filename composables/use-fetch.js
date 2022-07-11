
import { ref, watchEffect } from 'vue'


export function useGetArticles() {
  return useFetch(() => `https://api.spaceflightnewsapi.net/v3/articles`)
  }

export function useGetArticle(getId) {
  return useFetch(() => `https://api.spaceflightnewsapi.net/v3/articles/${getId()}`)
}


function useFetch(getUrl) { 
   
    const data = ref(null);
    const error = ref(null);
    const isPending = ref(true);
  
    watchEffect(() =>{
      isPending.value = true;
      data.value = null;
      error.value = null;
      fetch(getUrl())
        .then(res => res.json())
        .then(_data => {
          data.value = _data;
          isPending.value = false;
        })
        .catch(err => {
          error.value = err;
          isPending.value = false;
        });
    });

    return {
      data,
      error,
      isPending
    }
  }