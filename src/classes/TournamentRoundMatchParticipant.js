const names = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious",
  "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent",
  "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious",
  "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome",
  "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary",
  "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular",
  "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious",
  "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous",
  "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish",
  "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible",
  "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic",
  "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous",
  "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];

export default class TournamentRoundMatchParticipant{
  /**
   *
   * @param name
   */
  constructor(name) {
    const randomName = (list) =>{
      const name = list[Math.floor(Math.random() * list.length)]
      list.splice(list.indexOf(name), 1)

      return name
    }


    this.name = name || randomName(names)
    this.score = 0
    this.img="tba_400x400.jpg"
  }
}