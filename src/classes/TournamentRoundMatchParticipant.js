export default class TournamentRoundMatchParticipant{
  /**
   *
   * @param name
   */
  constructor(name) {
    this.name = name || 'Participant'
    this.score = 0
  }
}