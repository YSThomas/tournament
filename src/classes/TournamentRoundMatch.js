import Participant from "./TournamentRoundMatchParticipant";

export default class TournamentRoundMatch {
  _id
  date
  numberMatch
  numberRound
  participantList
  generalMatchScore
  isCompleted
  winner

  /**
   *
   * @param numberMatch
   * @param numberRound
   */

  constructor(numberMatch,numberRound) {
    this._id = '_' + Math.random().toString(36).substr(2, 9);
    this.date = new Date(2021, Math.floor(Math.random() * 11), Math.floor(Math.random() * 31) + 1)
    this.numberMatch = numberMatch
    this.numberRound = numberRound
    this.participantList = numberRound === 1 ? [new Participant(), new Participant()] : [new Participant("TBA"), new Participant("TBA")]
    this.generalMatchScore = 0
    this.isCompleted = this.date < new Date()
    this.winner = null
  }
}