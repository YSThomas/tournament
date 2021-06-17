import Participant from './TournamentRoundMatchParticipant.js'

export default class TournamentRoundMatch {
  /**
   *
   * @param participantName_1
   * @param participantName_2
   */
  constructor(participantName_1, participantName_2) {
    this.participantList = [new Participant(participantName_1), new Participant(participantName_2)]
  }
}