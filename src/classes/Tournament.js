import Round from './TournamentRound'

export default class Tournament {
  /**
   *
   * @param playersCount
   */
  constructor(playersCount) {
    this.playersCount = playersCount
    this.roundsCount = null
    this.rounds = []
  }

  setRounds(){ // Создает раунды
    for (let i = 0; i < this.roundsCount; i++){
      this.rounds.push(new Round())
    }
  }

  setRoundsCount(){ // Определяет и устанавливает кол-во раундов
    let num = 0
    let i = this.playersCount
    do{
      num +=1
      i = i/2
    }while(i !== 1)
    this.roundsCount = num
  }
}