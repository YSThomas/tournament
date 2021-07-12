<template>
  <div class="tournament_settings">
    <form>
      <input v-model="playersCount" type="number" placeholder="Введите кол-во игроков"><br>
      <input v-model="generalScore" type="number" placeholder="Введите до скольки очков идет игра"><br>
      <button @click.prevent="renderTournament" :disabled="!playersCount">Создать турнир</button>
      <p class="error" v-if="error">{{ error }}</p>
      <p class="message" v-if="message">{{ message }}</p>
    </form>
  </div>
  <hr>
  <Tournament :roundList="getRoundList" :matchList="getMatchList" :generalScore="generalScore"></Tournament>
</template>

<script>
import Tournament from "@/components/Tournament";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TournamentPage",
  components: {Tournament},
  data() {
    return {
      playersCount: null,
      generalScore: null,
      message: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(['createTournament','clearUsedNameIndexList']),

    renderTournament() {
      if(this.getUsedNameIndexList.length !== 0) this.clearUsedNameIndexList()

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
    ...mapGetters(['getTournament','getRoundList', 'getMatchList', 'getUsedNameIndexList']),
  }
}
</script>

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

</style>