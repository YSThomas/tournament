import Round from "@/classes/TournamentRound";
import Match from "@/classes/TournamentRoundMatch";
import Participant from "@/classes/TournamentRoundMatchParticipant";

export default {
  createTournament({commit, getters, dispatch}, participantsCount) { // Создание турнира
    return new Promise((resolve, reject) => {
      participantsCount = Number(participantsCount)
      if (typeof participantsCount === 'number' && participantsCount > 1 && participantsCount === Math.pow(2, Math.floor(Math.log(participantsCount) / Math.log(2)))) {
        commit('SET_PARTICIPANTS_COUNT', participantsCount)
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
    let roundsCount = Math.log(state.participantsCount) / Math.log(2);
    commit('SET_ROUNDSCOUNT', roundsCount)
  },
  createRounds({commit, getters}) { // Создает раунды
    let roundList = []
    for (let i = 0; i < getters.getTournament.roundsCount; i++) {
      roundList.push(new Round(i + 1))
    }
    commit('SET_ROUNDLIST', roundList)
  },
  createMatches({commit, getters}) { // Устанавливает мачти
    let matchList = []

    getters.getRoundList.forEach((round, i) => {
      for (let j = 0; j < getters.getParticipantsCount / Math.pow(2, round.roundNumber); j++) {
        let randomDate = new Date(2021, Math.floor(Math.random() * 11), Math.floor(Math.random() * 31) + 1)
        let matchNumber = j + 1

        let currentMatch = round.roundNumber===1? new Match(randomDate,matchNumber,round.roundNumber, new Participant(), new Participant()) : new Match(randomDate,matchNumber,round.roundNumber, new Participant("TBA"), new Participant("TBA"))
        matchList.push(currentMatch)
      }
    })
    commit('SET_MATCHLIST', matchList)
  }
}