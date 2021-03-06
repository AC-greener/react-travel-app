const defaultState = {
  isLogin: false,
  username: '',
  id: 0
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'login':
      const newState = {
        isLogin: true,
        username: action.payload.username,
        id: action.payload.id
      }
      return newState
    default:
      return state;
  }
}
