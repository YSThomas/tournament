export default class TournamentRoundMatch {
  /**
   *
   * @param participantNameList
   */
  constructor(date, ...participantNameList) {
    this.date = date
    this.score = `0 - 0`
    this.participantList = [...participantNameList]
    this.isCompleted = this.date < new Date()
  }
}