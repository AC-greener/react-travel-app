const defaultState = {
  adminIsLogin: false,
  adminUsername: '',
  adminId: 0
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'adminLogin':
      const newState = {
        adminIsLogin: true,
        adminUsername: action.payload.username,
        adminId: action.payload.id
      }
      return newState
    default:
      return state;
  }
}
