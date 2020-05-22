import { combineReducers } from 'redux-immutable'
import  recLineTableReducer  from '../pages/reclinedetail/store/reducer' 
import login from '../pages/login/store/reducer'
const reducer =  combineReducers({  //整合reducer
  login,
  recLineTableReducer,
})

export default reducer;