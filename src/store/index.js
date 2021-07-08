import {createStore} from 'vuex'
import tournament from "./modules/moduleTournament/tournament";
import participantName from "./modules/moduleTournamentParticipantName/participantName"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tournament,
    participantName
  },
  getters: {}
})
