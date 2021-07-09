import store from "../../index";

export default {
  // setRandomName({commit, getters}) {
  //   const nameList = getters.getRandomNameList
  //   const name = nameList[Math.floor(Math.random() * nameList.length)]
  //   commit('REMOVE_USED_NAME', nameList.indexOf(name))
  //
  //   return name
  // }

  getName({commit, getters}){
    let usedNameIndexList = getters.getUsedNameIndexList
    let nameList = getters.getRandomNameList
    let randomNameListIndex = Math.floor(Math.random() * nameList.length)
    let name = nameList[randomNameListIndex]
    let nameIndex = nameList.indexOf(name)

    const nameValidation = () => {
      if (nameList.length <= usedNameIndexList.length) throw Error ('Все имена заняты!')
      usedNameIndexList.forEach((usedIndex, i) => {
        console.log(`${usedNameIndexList[i]} : ${nameList.indexOf(name)}. Имя подходит: ${usedNameIndexList[i] === nameList.indexOf(name)}`)
        if (name === nameList[usedIndex]) {
          randomNameListIndex = Math.floor(Math.random() * nameList.length)
          name = nameList[randomNameListIndex]
          nameIndex = nameList.indexOf(name)

          nameValidation()
        }
      })
    }
    nameValidation()
    console.log(name)
    commit('ADD_USED_NAME_INDEX', nameIndex)
    return name

    // const nameValidation = () =>{
    //   for (let i = 0; i < usedNameIndexList.length; i++){
    //     console.log(`${usedNameIndexList[i]} : ${nameList.indexOf(name)}. Имя подходит: ${usedNameIndexList[i] === nameList.indexOf(name)}`)
    //     if (usedNameIndexList[i] === nameList.indexOf(name)){
    //       usedNameIndexList = getters.getUsedNameIndexList
    //       randomNameListIndex = Math.floor(Math.random() * nameList.length)
    //       name = nameList[randomNameListIndex]
    //       nameValidation()
    //     }else{
    //       return name
    //     }
    //   }
    // }

    //
    // console.log(name)
    //
    // return name
  }
}