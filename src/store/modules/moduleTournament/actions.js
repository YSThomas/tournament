import Round from "../../../classes/TournamentRound";
import Match from "../../../classes/TournamentRoundMatch";
import Participant from "../../../classes/TournamentRoundMatchParticipant";

export default {
  createTournament({commit, getters, dispatch}, data) { // Создание турнира
    return new Promise((resolve, reject) => {
      data = Number(data)
      if (typeof data === 'number' && data > 1 && data === Math.pow(2, Math.floor(Math.log(data) / Math.log(2)))) {
        commit('SET_PARTICIPANTS_COUNT', data)
        commit('SET_TOURNAMENT')
        dispatch('defineRoundsCount')
        dispatch('createRounds')
        dispatch('createMatches')
        resolve()
      } else {
        reject('Количество игроков должно быть: 2, 4, 8, 16, 32, 64...')
      }
    })
  },
  defineRoundsCount({state, commit}) { // Определяет и устанавливает кол-во раундов
    let num = Math.log(state.participantsCount) / Math.log(2);
    commit('SET_ROUNDSCOUNT', num)
  },
  createRounds({commit, getters}) { // Создает раунды
    let roundList = []
    for (let i = 0; i < getters.getTournament.roundsCount; i++) {
      roundList.push(new Round(i + 1))
    }
    commit('SET_ROUNDLIST', roundList)
  },
  createMatches({state, commit, getters}) { // Устанавливает мачти
    let matchList = []

    state.roundList.forEach((round, i) => {
      for (let j = 0; j < Math.pow(2, round.roundNumber) / 2; j++) {
        let currentMatch = new Match(new Date(2021, Math.floor(Math.random() * 11), Math.floor(Math.random() * 31) + 1), new Participant("TBA"), new Participant("TBA"))
        round.matchList.push(currentMatch)
        matchList.push(currentMatch)
      }
    })
    commit('SET_MATCHLIST', matchList)
  }
}