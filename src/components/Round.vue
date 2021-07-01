<template>
  <span class="round-number">Round {{ round.roundNumber }}</span>
  <ul class="round__list-items">
    <li class="match" v-for="match in getMatchListByRoundNumber(round.roundNumber)">
      <Match :match="match" :isLastMatch="match === matchList[matchList.length - 1]"></Match>
    </li>
  </ul>
</template>

<script>
import Match from "./Match";


export default {
  name: "Round",
  props: {
    round: Object,
    matchList: Array
  },
  components: {Match},
  methods: {
    getMatchListByRoundNumber(roundNumber) {
      return this.matchList.filter(match => match['numberRound'] === roundNumber)
    },
  }
}
</script>

<style scoped>
.round-number{
  display: flex;
  justify-content: center;
  font-weight: bolder;
}

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