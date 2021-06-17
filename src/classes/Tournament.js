export default class Tournament {
  /**
   *
   * @param playersCount
   */
  constructor(playersCount) {
    this.playersCount = playersCount
    this.roundsCount = null
    this.roundList = []
  }
}