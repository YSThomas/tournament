import Tournament from "../../classes/Tournament";

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
    }
  },
  actions: {
    createTournament({commit, getters}, data){ // Создание турнира
      data = Number(data)
      if(typeof data === 'number' && data > 0 && data % 2 === 0 && data % 3 !== 0) {
        commit('SET_PARTICIPANTS_COUNT', data)
        commit('SET_TOURNAMENT')
        getters.getTournament.setRoundsCount() // Определяет и устанавливает кол-во раундов
        getters.getTournament.setRounds() // Создает раунды

        for (let i = 0; i < getters.getTournament.rounds.length; i++) { // Для каждого раунда создает матчи
          let num = 1
          let elementCount = i+1
          do{
            num *=2
            elementCount -= 1
          }while(elementCount !== 0)
          getters.getTournament.rounds[i].setMatches(num/2)
        }
      }else{
        throw Error('Количество игроков должно быть: 2, 4, 8, 16, 32, 64...')
      }
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
