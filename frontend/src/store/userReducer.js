import * as actionTypes from './userActions';

const initState = {
  accessToken: null,
  email: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return { ...state, ...action.user };
    default: return state;
  }
};

export default userReducer;
