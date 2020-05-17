const defaultState = {
  recLineTableData: [], 
}

const recLineTableReducer = (state = defaultState, action) => {
    if(action.type === 'get_recline_data') {
      let newState = {
        recLineTableData: action.data,
      }
      return newState
    }  
    return state
}
export default recLineTableReducer