import Tournament from "@/classes/Tournament";

export default {
  SET_PARTICIPANTS_COUNT(state, data) { // Установка количества участников
    state.participantsCount = data
  },
  SET_TOURNAMENT(state) { // Установка турнира
    state.tournament = new Tournament(state.participantsCount)
  },
  SET_ROUNDSCOUNT(state, data) { // Устанавливает число раундов
    state.tournament.roundsCount = data
  },
  SET_ROUNDLIST(state, data) { // Устанавливает раунды в state (Удалить при необходимости)
    state.roundList = data
  },
  SET_MATCHLIST(state, data) { // Устанавливает матчи в state (Удалить при необходимости)
    state.matchList = data
  },
  INCREASE_PARTICIPANT_SCORE(state, {matchID, i}) {
    state.matchList.find(match => match._id === matchID).participantList[i].score++ // Увеличивает счет у участника под указанным индексом
  },
  INCREASE_GENERAL_MATCH_SCORE(state, {matchID}){
    state.matchList.find(match => match._id === matchID).generalMatchScore++
  },
  SET_MATCH_WINNER(state, {matchID, winner}){
    state.matchList.find(match => match._id === matchID).winner = winner
  }
}