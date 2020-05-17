import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer } from '../pages/login/store/index'
import  recLineTableReducer  from '../pages/reclinedetail/store/reducer' 
const reducer =  combineReducers({  //整合reducer
  // header: headerReducer,
  // home: homeReducer,
  recLineTableReducer,
  login: loginReducer
})

export default reducer;