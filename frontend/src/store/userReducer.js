import * as actionTypes from './userActions';

const initState = {
  accessToken: null,
  user: {
    id: null,
    email: null
  }
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, acessToken: action.token };
    case actionTypes.SET_USER_DATA:
      return { ...state, user: action.user };
    default: return state;
  }
};

export default userReducer;
