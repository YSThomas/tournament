import store from "../store";

export default class TournamentRoundMatchParticipant {
  /**
   *
   * @param name
   */
  constructor(name) {
    this.name = name || this.getName()

    this.score = 0
    this.img = "tba_400x400.jpg"
  }

  getName(){
    const nameList = store.getters.getRandomNameList
    const name = nameList[Math.floor(Math.random() * nameList.length)]
    store.commit('REMOVE_USED_NAME', nameList.indexOf(name))

    return name
  }
}