<template>
  <div class="start">
    <ul class="list-group">
      <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/MVPbyTech">M.V.P. by Technician</router-link></button>
      </li>
      <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/AverageAges">Average age of players by Club by Coach</router-link></button>
      </li>
      <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/PlayersByCouch">Players managed by more than one coach</router-link></button>
      </li>
      <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/rankingTechnicians">Most winning technician with score included (w = 3 pts, d = 1, l = 0)</router-link></button>
      </li>
       <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/OldestTeams">Oldest average age team (Include name of coach)</router-link></button>
      </li>
       <li class="list-group-item">
        <button class="btn"><router-link class="router-lk" to="/listOfClubs">List of clubs involved</router-link></button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Start',
  components: {

  }
}
</script>
<style scoped>
.router-lk {
  list-style: none;
  text-decoration: none;
}
</style>