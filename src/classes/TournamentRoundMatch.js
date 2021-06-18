export default class TournamentRoundMatch {
  /**
   *
   * @param participantNameList
   */
  constructor(...participantNameList) {
    // this.participantList = [new Participant(participantName), new Participant(participantName)]
    this.participantList = [...participantNameList]
  }
}