import store from "../../index";

export default {
  getName({commit, getters}) {
    return new Promise((resolve, reject) => {
      let usedNameIndexList = getters.getUsedNameIndexList
      let nameList = getters.getRandomNameList
      let randomNameListIndex = Math.floor(Math.random() * nameList.length)
      let name = nameList[randomNameListIndex]
      let nameIndex = nameList.indexOf(name)

      if (nameList.length <= usedNameIndexList.length) {
        throw Error ('Все имена заняты')
      }else{
        while(usedNameIndexList.includes(nameIndex)){
          if(usedNameIndexList.length > 0 || usedNameIndexList.includes(nameIndex)){
            randomNameListIndex = Math.floor(Math.random() * nameList.length)
            name = nameList[randomNameListIndex]
            nameIndex = nameList.indexOf(name)
          }else{
            break
          }
        }
        console.log(name)
        commit('ADD_USED_NAME_INDEX', nameIndex)
        resolve(name)
      }
    })
  },
  clearUsedNameIndexList({commit}){
    commit('RESET_USED_NAME_INDEX_LIST')
  }
}