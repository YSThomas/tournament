<template>
      <div class="match_card" :class="{match_complete: match.isCompleted, even: match.numberMatch % 2 === 0}">
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
  width: 1.7em;
  left: -1.7em;
  top: 50%;
}

.match_card:after {
  content:'';
  border-color: #4f7a38;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -11px;
}

.match_card:after {
  content: '';
  border-right-style: solid;
  border-bottom-style: solid;
  height: -100%;
  top: 50%;
}
.match_card.even:after {
  content: '';
  border-right-style: solid;
  border-bottom-style: solid;
  height: 100%;
  top: -50%;
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