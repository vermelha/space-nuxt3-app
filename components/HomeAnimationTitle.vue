<template>
    <span class="uppercase text-sm block -mt-8">Join Us for more</span>
   
   <div class="uppercase text-4xl md:text-7xl font-bold pt-3">Space 
        <div class="word inline-block">
        <span> news</span>
        <span> reports</span>
        <span> blogs</span>
        <span> launches</span>
        </div>
  </div>


</template>



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
</style>
