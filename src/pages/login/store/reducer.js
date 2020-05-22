const defaultState = {
  login: false,
  username: '',
  id: 0
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'login':
      const newState = {
        login: true,
        username: action.payload.username,
        id: action.payload.id
      }
      console.log(newState)
      return newState
    default:
      return state;
  }
}
