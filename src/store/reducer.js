import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer } from '../pages/login/store/index'
const reducer =  combineReducers({  //整合reducer
  // header: headerReducer,
  // home: homeReducer,
  // detail: DetailReducer,
  login: loginReducer
})

export default reducer;