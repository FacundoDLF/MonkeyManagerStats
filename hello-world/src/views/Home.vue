<template>
  <div class="home">
    <HelloWorld msg="Welcome to Monkey ManagerStats"/>
    <button class="start-btn btn"><router-link to="/start"><img class="start-img" alt="Vue logo" src="../assets/logo.png"></router-link></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.start-btn, .start-img {
  width: 50%;
  height: 50%;
  border-style: none;
}

.start-btn, .start-img :hover{
  width: 55%;
  height: 55%;
  
}
</style>
