import { USERNAME, PASSWORD, USER } from '../actions/constants';

const initialState = {
  username: null,
  password: null,
  status: false,
};

export const login = (state = initialState, action) => {
  if (action.type === USER) {
    if (action.payload.username && action.payload.password) {
      return Object.assign({}, state, {
        username: action.payload.username, 
        password: action.payload.password,
        status: true,
      });
    } else if (!action.payload.username || !action.payload.password) {
      return state;
    }
  }
  return state;
};
