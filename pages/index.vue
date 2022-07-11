<template>
  <div class="hero flex items-center relative bg-cover bg-no-repeat h-screen" style="background-image:url('/assets/img/nasa-CpHNKNRwXps-unsplash.jpeg')">

      <div class="container relative z-10 mx-auto flex items-start md:-mt-16 flex-col">

          <home-animation-title />
          <login-form />
      </div>
  </div>
</template>



<style scoped>
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
