<template>
  <span>Round {{ round.roundNumber }}</span>
  <ul class="round__list-items">
    <li class="match" v-for="match in getMatchListByRoundNumber(round.roundNumber)">
      <Match :match="match"></Match>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";
import Match from "./Match";


export default {
  name: "Round",
  props: ['round'],
  components: {Match},
  methods: {
    getMatchListByRoundNumber(roundNumber) {
      return this.getMatchList.filter(match => match['numberRound'] === roundNumber)
    },
  },
  computed: {
    ...mapGetters(['getRoundList', 'getMatchList']),
  }
}
</script>

<style scoped>
.round__list-items {
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.match {
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
</style>