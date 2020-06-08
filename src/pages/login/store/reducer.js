const defaultState = {
  isLogin: false,
  username: 'admin',
  id: 5
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'login':
      const newState = {
        isLogin: true,
        username: action.payload.username,
        id: action.payload.id
      }
      console.log('loginState', newState)
      return newState
    default:
      return state;
  }
}
