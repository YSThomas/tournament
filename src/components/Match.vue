<template>
      <div class="match_card" :class="{match_complete: match.isCompleted}">
        <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
        <span class="match_score" v-if="match.isCompleted">
              {{match.participantList[0].score}} - {{match.participantList[1].score}}
            </span>
        <span class="match_score" v-else>
               {{match.date.getMonth()}} / {{match.date.getDate()}} / {{match.date.getFullYear()}}
          <small class="date">mm/dd/yyyy</small>
            </span>
        <img class="participant_img" src="../assets/tba_400x400.jpg" alt="TBA">
      </div>
</template>

<script>
export default {
  name: "Match",
  props:['match']
}
</script>

<style scoped>

.match_card{
  display: flex;
  align-items: center;
  background-color: #c7ffc7;
  color: black;
  border: 2px solid green;
  border-radius: 10px;
  height: 4rem;
  width: 12rem;
  justify-content: center;
}

.match_card::before{
  content: "";
  border-top: 2px solid #4f7a38;
  position: absolute;
  height: 2px;
  width: 10px;
  left: -10px;
  top: 50%;
}

.match_card::before{
  content: "";
  border-top: 2px solid #4f7a38;
  position: absolute;
  height: 2px;
  width: 10px;
  left: -10px;
  top: 50%;
}

.match_complete{
  background-color: #008000;
  color: white;
  border: 2px solid #C7FFC7FF;
}

.match_score{
  margin: 0 0.3rem;
}

.date{
  opacity: 40%;
}

.participant_img{
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>