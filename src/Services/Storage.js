import * as types from '../Redux/Actions/Constants';

const storage = {
  set: (options) => (dispatch) => {
    const { data, key } = options;
    localStorage.setItem(
      key,
      typeof data === 'string' ? data : JSON.stringify(data)
    );
    dispatch({
      type: types.SAVED,
      payload: 'Data Saved'
    });
  },
  get: (options) => (dispatch) => {
    const [success] = options.types;
    const response = localStorage[options.key];

    if (response === null) {
      dispatch({
        type: success,
        payload: null
      });
    } else {
      dispatch({
        type: success,
        payload: response
      });
    }
  },
  remove: (key) => (dispatch) => {
    if (localStorage[key]) {
      localStorage.removeItem(key);
      dispatch({
        type: types.REMOVED,
        payload: 'Data Removed'
      });
    }
  }
};

export { storage };
