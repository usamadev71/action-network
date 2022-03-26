import * as types from './Constants';

export const setName = (name) => (dispatch) => {
  dispatch({
    type: types.SET_NAME,
    payload: name
  });
};
