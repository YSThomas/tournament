<template>
  <div class="tournament">
    <form>
      <input v-model="playersCount" type="number">
      <button @click.prevent="renderTournament" :disabled="!playersCount">Создать турнир</button>
      <p class="errors_list" v-for="error in errorList">{{error}}</p>
      <p class="message" v-if="message">{{message}}</p>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Tournament',
  data(){
    return{
      playersCount: null,
      message: '',
      errorList:[]
    }
  },
  methods: {
    ...mapActions(['createTournament']),

    renderTournament(){
      this.createTournament(this.playersCount)
          .then(success => {
            this.message = 'Турнир успешно создан'
            setTimeout(()=>{
              this.message = ''
            }, 2000)
          })
          .catch(e => {
            this.errorList.push(e)
            setTimeout(()=>{
              this.errorList = []
            }, 2000)
            console.error(e)
          })
    }
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
