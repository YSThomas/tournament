<template>
  <div class="tournament_settings">
    <form>
      <input v-model="playersCount" type="number">
      <button @click.prevent="renderTournament" :disabled="!playersCount">Создать турнир</button>
      <p class="error" v-if="error">{{ error }}</p>
      <p class="message" v-if="message">{{ message }}</p>
    </form>
  </div>
  <hr>
  <div class="tournament_bracket">
    <div class="round" :class="`round__number-${i+1}`" v-for="(round, i) in getRoundList">
      <Round :round="round"></Round>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Round from "./Round";

export default {
  name: 'Tournament',
  components: {Round},
  data() {
    return {
      playersCount: null,
      message: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(['createTournament']),

    renderTournament() {
      this.createTournament(this.playersCount)
          .then(success => {
            this.message = 'Турнир успешно создан'
            setTimeout(() => {
              this.message = ''
            }, 3000)
          })
          .catch(e => {
            this.error = e
            setTimeout(() => {
              this.error = ''
            }, 3000)
            console.error(e)
          })
    },
  },
  computed: {
    ...mapGetters(['getRoundList', 'getMatchList']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  font-weight: bold;
  color: darkred;
}

.message {
  font-weight: bold;
  color: green;
}

.tournament_settings form {
  text-align: center;
}

.tournament_bracket {
  display: flex;
  justify-content: center;
  max-width: 28%;
  margin: 0 auto;
}

.round {
  display: block;
  margin-left: -3px;
  flex: 1;
}

ul {
  list-style-type: none;
  padding: 0;
}

@media (max-width: 1024px) {
  .tournament_bracket {
    display: block;
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
