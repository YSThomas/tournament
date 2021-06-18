import Tournament from "../../../classes/Tournament";

export default {
  SET_PARTICIPANTS_COUNT(state, data){ // Установка количества участников
  state.participantsCount = data
},
  SET_TOURNAMENT(state){ // Установка турнира
  state.tournament = new Tournament(state.participantsCount)
},
  SET_ROUNDSCOUNT(state, data){ // Устанавливает число раундов
  state.tournament.roundsCount = data
},
  SET_ROUNDLIST(state, data){ // Устанавливает раунды в state (Удалить при необходимости)
  state.roundList = data
},
  SET_MATCHLIST(state, data){ // Устанавливает матчи в state (Удалить при необходимости)
  state.matchList = data
}
}