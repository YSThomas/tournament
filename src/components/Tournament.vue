<template>
  <div class="tournament">
    <form>
      <input v-model="playersCount" type="number">
      <button @click.prevent="createTournament(playersCount)" :disabled="!playersCount">Создать турнир</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tournament',
  data(){
    return{
      playersCount: null
    }
  },
  methods: {
    ...mapActions(['createTournament'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
