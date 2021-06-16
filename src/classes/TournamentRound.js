import Match from "./TournamentRoundMatch";

export default class TournamentRound {
  constructor() {
    this.matches = []
  }

  setMatches(num){ // Устанавливает мачти для раунда
    for (let i = 0; i < num; i++){
      this.matches.push(new Match())
    }
  }
}