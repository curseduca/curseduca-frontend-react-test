const initState = {
  accessToken: null,
  user: {
    id: null,
    email: null
  }
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, acessToken: action.token };
    case 'SET_USER_INFO':
      return { ...state, user: action.user };
    default: return state;
  }
};

export default userReducer;
