import { combineReducers } from 'redux';

import { homeReducer } from './Home';
import { scoreboardReducer } from './Scoreboard';

export default combineReducers({
  homeReducer,
  scoreboardReducer
});
