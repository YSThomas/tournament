import Round from "@/classes/TournamentRound";
import Match from "@/classes/TournamentRoundMatch";

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
        let matchNumber = j + 1

        let currentMatch = new Match(matchNumber, round.roundNumber)
        matchList.push(currentMatch)
      }
    })
    commit('SET_MATCHLIST', matchList)
  },
  increaseMatchParticipantScore({commit, getters}, {matchID, i, generalScore}) { // Принимает матч и индекс участника в матче
    generalScore = parseInt(generalScore)

    return new Promise((resolve, reject) =>{
      if(!matchID || !Number.isInteger(i) || !generalScore) {
        reject(`Something went wrong! Required properties is set?: Match ID (matchID): ${!!matchID}, participant index (i): ${!!i}, general match score (generalScore): ${!!generalScore}`)
      }

      const match = getters.getMatchList.find(match => match._id === matchID)

      if(!match.participantList[i] || match.participantList[i].name === 'TBA'){
        reject(`Participant is undefined. Participant index: ${i}, name: ${match.participantList[i].name}`)
      }

      if (match.generalMatchScore < generalScore) { // Если в матче общий счет меньше generalScore (указывается в настройках матча TournamentPage.vue)
        commit('INCREASE_PARTICIPANT_SCORE', {matchID, i});
        commit('INCREASE_GENERAL_MATCH_SCORE', {matchID});
      }

      if(match.generalMatchScore >= generalScore){
        const winner = match.participantList[0].score > match.participantList[1].score ? match.participantList[0] : match.participantList[1]
        let nextMatchParticipant
        let participantIndex

        match.numberMatch % 2 === 0 ? nextMatchParticipant = match.numberMatch : nextMatchParticipant = match.numberMatch + 1
        match.numberMatch % 2 === 0 ? participantIndex = 1 : participantIndex = 0

        commit('SET_MATCH_COMPLETED', getters.getMatchList.indexOf(match))

        if(match.numberRound + 1 <= getters.getTournament.roundsCount){
          console.log(match.numberRound , getters.getTournament.roundsCount)
          commit('SET_MATCH_WINNER', {matchID, winner})
          commit('SET_WINNER_AS_A_PARTICIPANT', {winnerId: winner._id, winnerName: winner.name, winnerImg: winner.img, numberRound: match.numberRound + 1, numberMatch: nextMatchParticipant / 2, participantIndex})
        }else{
          getters.getTournament.winner = winner
          console.log(`Победитель турнира: ${winner.name}`)
        }
      }
      resolve()
    })
  }
}