import { combineReducers } from 'redux-immutable'
import  recLineTableReducer  from '../pages/reclinedetail/store/reducer' 
const reducer =  combineReducers({  //整合reducer
  // header: headerReducer,
  // home: homeReducer,
  recLineTableReducer,
})

export default reducer;