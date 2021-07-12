export default {
  RESET_USED_NAME_INDEX_LIST(state, i){
    state.usedNameIndexList = []
  },
  ADD_USED_NAME_INDEX(state, i){
    state.usedNameIndexList.push(i)
  },
}