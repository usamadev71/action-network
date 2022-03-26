import * as types from '../Actions/Constants';

const initialState = {
  records: [],
  leaders: []
};

const compare = (a, b) => {
  if ( a.rolls < b.rolls ){
    return -1;
  }
  if ( a.rolls > b.rolls ){
    return 1;
  }

  return 0;
};

const scoreboardReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.GET_RECORDS: {
    const records = action.payload ? JSON.parse(action.payload).sort(compare) : [];

    return {
      ...state,
      leaders: records.length > 5 ? records.slice(0, 5) : records,
      records
    };
  }
  default:
    return state;
  }
};

export { scoreboardReducer };
