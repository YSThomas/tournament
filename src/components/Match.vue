<template>
  <ul class="round__list-items">
    <li class="match" v-for="match in round">
      <div class="match_card" :class="{match_complete: match.isCompleted}">
        <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
        <span class="match_score">
              {{match.participantList[0].score}} - {{match.participantList[1].score}}
            </span>
        <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Match",
  props:{
    round: Array
  }
}
</script>

<style scoped>
.round__list-items{
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.match{
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.match_card{
  display: flex;
  align-items: center;
  background-color: #c7ffc7;
  border: 1px solid green;
  border-radius: 10px;
  height: 4rem;
  width: 12rem;
  justify-content: center;
}

.match_score{
  margin: 0 0.3rem;
}

.participant_img{
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>