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
    this.generalMatchScore = 0
    this.isCompleted = this.date < new Date()
  }
}