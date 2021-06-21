export default class TournamentRoundMatch {
  /**
   *
   * @param participantNameList
   */
  constructor(...participantNameList) {
    this.participantList = [...participantNameList]
  }
}