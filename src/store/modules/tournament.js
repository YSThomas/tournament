import Tournament from "../../classes/Tournament";
import Round from "../../classes/TournamentRound";
import Match from "../../classes/TournamentRoundMatch";
import Participant from '../../classes/TournamentRoundMatchParticipant.js'

export default ({
  state: {
    tournament: null, // Сам турнир
    participantsCount: null, // Кол-во участников
    matchList: null,
    roundList: null,
  },
  mutations: {
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
  },
  actions: {
    createTournament({commit, getters, dispatch}, data){ // Создание турнира
      data = Number(data)

      if(typeof data === 'number' && data === Math.pow(2,Math.floor(Math.log(data)/Math.log(2)))) {
        commit('SET_PARTICIPANTS_COUNT', data)
        commit('SET_TOURNAMENT')
        dispatch('defineRoundsCount')
        dispatch('createRounds')
        dispatch('createMatches')
        console.log(getters.getTournament)
      }else{
        throw Error('Количество игроков должно быть: 2, 4, 8, 16, 32, 64...')
      }
    },
    defineRoundsCount({ state, commit }){ // Определяет и устанавливает кол-во раундов
      let num = 0
      let i = state.tournament.playersCount
      do{
        num +=1
        i = i/2
      }while(i !== 1)
      commit('SET_ROUNDSCOUNT', num)
    },
    createRounds({ commit, getters }){ // Создает раунды
      let roundList = []
      for (let i = 0; i < getters.getTournament.roundsCount; i++){
        roundList.push(new Round())
      }
      commit('SET_ROUNDLIST', roundList)
    },
    createMatches({ commit, getters }){ // Устанавливает мачти
      //state.roundList
      let num = 1
      let sum = []
      let elementCount = getters.getTournament.roundsCount
      do{
        num *=2
        elementCount -= 1
        sum.push(num/2)
      }while(elementCount !== 0)
      sum = sum.reduce((acc, current) => acc + current)

      let matchArr = []
      for (let i = 0; i < sum; i++){
        matchArr.push(new Match(new Participant(), new Participant()))
      }
      commit('SET_MATCHLIST', matchArr)
    }
  },
  getters:{
    getTournament(state){
      return state.tournament
    }
  },
  modules: {
  }
})
