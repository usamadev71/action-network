import * as types from '../Actions/Constants';

const initialState = {
  name: ''
};

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.SET_NAME: {
    return {
      ...state,
      name: action.payload
    };
  }
  default:
    return state;
  }
};

export { homeReducer };
