export default class TournamentRoundMatch {
  /**
   *
   * @param participantNameList
   */
  constructor(date,numberMatch,numberRound, ...participantNameList) {
    this.date = date
    this.numberMatch = numberMatch
    this.numberRound = numberRound
    this.participantList = [...participantNameList]
    this.isCompleted = this.date < new Date()
  }
}