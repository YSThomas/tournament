<template>
  <div class="match_card" :class="{match_complete: match.isCompleted, even: match.numberMatch % 2 === 0, last_match: isLastMatch}">
    <div class="participant_name">
      <small class="participant_name-item">{{match.participantList[0].name}}</small>
    </div>
    <img @click="increaseMatchParticipantScore(match, 0, generalScore)" class="participant_img" :src="require(`../assets/${match.participantList[0].img}`)" alt="TBA">
    <span class="match_score" v-if="match.isCompleted">
      {{ match.participantList[0].score }} - {{ match.participantList[1].score }}
    </span>
    <span class="match_score" v-else>
      {{ match.date.getMonth() }} / {{ match.date.getDate() }} / {{ match.date.getFullYear() }}
      <small class="date">mm/dd/yyyy</small>
    </span>
    <div class="participant_name">
      <small class="participant_name-item">{{match.participantList[1].name}}</small>
    </div>
    <img @click="increaseMatchParticipantScore(match, 1, generalScore)" class="participant_img" :src="require(`../assets/${match.participantList[1].img}`)" alt="TBA">
  </div>
</template>

<script>
export default {
  name: "Match",
  props: {
    match: Object,
    isLastMatch: Boolean,
    generalScore: Number
  },
  methods:{
    increaseMatchParticipantScore(match, i, generalScore){ // Принимает матч и индекс участника в матче
      if(match.generalMatchScore < generalScore){ // Если в матче общий счет меньше generalScore (указывается в настройках матча TournamentPage.vue)
        match.participantList[i].score++ // Увеличивает счет у участника под указанным индексом
        match.generalMatchScore++ // Увеличивает глобальный счетчик очков в матче
      }
    }
  }
}
</script>

<style scoped>

.participant_name{
  position: relative;
  height: 3rem;
  /*pointer-events: none;*/
}

.participant_name-item{
  position: absolute;
  top: -7px;
  /*z-index: 1;*/
  font-weight: 700;
  left: 2px;
  font-size: 0.6rem;
}

.match_card {
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

.match_card.last_match::after{
  display: none;
}

.match_card::before {
  content: "";
  border-top: 2px solid #4f7a38;
  position: absolute;
  width: 1.7em;
  left: -1.7em;
  top: 50%;
}

.match_card:after {
  content: '';
  border-color: #4f7a38;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -11px;
}

.match_card:after {
  border-right-style: solid;
  border-bottom-style: solid;
  top: 50%;
}

.match_card.even:after {
  content: '';
  border-right-style: solid;
  border-bottom-style: solid;
  height: 100%;
  top: -50%;
}

.match_complete {
  background-color: #008000;
  color: white;
  border: 2px solid #C7FFC7FF;
}

.match_score {
  margin: 0 0.3rem;
}

.date {
  opacity: 40%;
}

.participant_img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transition: 0.3s;
}

.participant_img:hover{
  transform: scale(1.2);
}

@media (max-width: 1023px) {
  .match_card::after {
    display: none;
  }

  .match_card::before {
    display: none;
  }
}
</style>