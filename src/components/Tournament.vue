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
  <div class="tournament_brackets">
    <div class="round" v-for="round in getRoundList">
      <span>Round {{round.roundNumber}}</span>
      <ul class="round__list-items">
        <li class="match" v-for="match in getMatchListByRoundNumber(round.roundNumber)">
          <div class="match_card" :class="{match_complete: match.isCompleted}">
            <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
            <span class="match_score">
              {{match.participantList[0].score}} - {{match.participantList[1].score}}
            </span>
            <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Tournament',
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
    getMatchListByRoundNumber(roundNumber){
      return this.getMatchList.filter(match => match['numberRound'] === roundNumber)
    }
  },
  computed:{
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

.tournament_settings form{
  text-align: center;
}

.tournament_brackets{
  display: flex;
  max-width: 1500px;
}

.round{
  display: block;
  margin-left: -3px;
  flex: 1;
}

.round__list-items{
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.match_card{
  display: flex;
  align-items: center;
  background-color: #c7ffc7;
  border: 1px solid green;
  border-radius: 10px;
  height: 4rem;
  width: 12rem;
}

.match{
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.match_score{
  margin: 0 0.3rem;
}

.participant_img{
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
