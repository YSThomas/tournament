import store from "../store";

export default class TournamentRoundMatchParticipant {

  _id
  name
  score
  img

  /**
   *
   * @param name
   */
  constructor(name) {
    let baseChars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";

    this._id = '_' + Math.random().toString(36).substr(2, 9) + baseChars.charAt(Math.floor(Math.random() * (baseChars.length)));

    if (name){
      // this.name = name
      Object.assign(this, {
        name
      })
    } else {
      store.dispatch('getName')
        .then(name => {
          // this.name = name
          Object.assign(this, {
            name
          })
        })
        .catch(e => {
          console.log(e)
        })
    }

    this.score = 0
    this.img = "tba_400x400.jpg"
  }
}