<template>
  <div class="round" v-for="round in getRoundList">
    <span>Round {{round.roundNumber}}</span>
    <Match :round="getMatchListByRoundNumber(round.roundNumber)"></Match>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Match from "./Match";


export default {
  name: "Round",
  components: {Match},
  methods: {
    getMatchListByRoundNumber(roundNumber){
      return this.getMatchList.filter(match => match['numberRound'] === roundNumber)
    },
  },
  computed:{
    ...mapGetters(['getRoundList', 'getMatchList']),
  }
}
</script>

<style scoped>
.round{
  display: block;
  margin-left: -3px;
  flex: 1;
}
</style>