import Participant from './TournamentRoundMatchParticipant.js'

export default class TournamentRoundMatch {
  /**
   *
   * @param participantName_1
   * @param participantName_2
   */
  constructor(participantName_1, participantName_2) {
    this.participant_1 = new Participant(participantName_1)
    this.participant_2 = new Participant(participantName_2)
  }
}