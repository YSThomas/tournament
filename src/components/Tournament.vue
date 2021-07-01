<template>
  <div class="tournament_bracket">
    <div class="round" :class="`round__number-${i+1}`" v-for="(round, i) in roundList">
      <Round :round="round" :matchList="matchList" :generalScore="generalScore"></Round>
    </div>
  </div>
</template>

<script>
import Round from "./Round";

export default {
  name: 'Tournament',
  components: {Round},
  props:{
    roundList: {
      type: Array,
      required: true
    },
    matchList: {
      type: Array,
      required: true
    },
    generalScore:{
      type: Number,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

@media (max-width: 1023px) {
  .tournament_bracket {
    display: block;
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
