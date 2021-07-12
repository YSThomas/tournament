import store from "../store";

export default class TournamentRoundMatchParticipant {
  /**
   *
   * @param name
   */
  constructor(name) {
    let baseChars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";

    this._id = `_${baseChars.charAt(Math.floor(Math.random() * (baseChars.length)))}${Date.now()}${baseChars.charAt(Math.floor(Math.random() * (baseChars.length)))}`

    if (name){
      this.name = name
    } else {
      store.dispatch('getName')
        .then(name => {
          this.name = name
        })
        .catch(e => {
          console.log(e)
        })
    }

    this.score = 0
    this.img = "tba_400x400.jpg"
  }
}