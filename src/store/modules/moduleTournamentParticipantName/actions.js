import store from "../../index";

export default {
  // setRandomName({commit, getters}) {
  //   const nameList = getters.getRandomNameList
  //   const name = nameList[Math.floor(Math.random() * nameList.length)]
  //   commit('REMOVE_USED_NAME', nameList.indexOf(name))
  //
  //   return name
  // }

  getName({commit, getters}) {
    return new Promise((resolve, reject) => {
      let usedNameIndexList = getters.getUsedNameIndexList
      let nameList = getters.getRandomNameList
      let randomNameListIndex = Math.floor(Math.random() * nameList.length)
      let name = nameList[randomNameListIndex]
      let nameIndex = nameList.indexOf(name)


      if (nameList.length <= usedNameIndexList.length) throw Error('Все имена заняты!')

      const returnName = () => {
        usedNameIndexList.forEach((usedIndex, i) => {
          if (name === nameList[usedIndex]) {
            randomNameListIndex = Math.floor(Math.random() * nameList.length)
            name = nameList[randomNameListIndex]
            nameIndex = nameList.indexOf(name)
            returnName()
          }
        })
      }

      returnName()
      console.log(name)
      commit('ADD_USED_NAME_INDEX', nameIndex)
      resolve(name)
    })
  }
}