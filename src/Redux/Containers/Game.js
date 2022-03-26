import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Game } from '../../Pages/Game';
import { setName } from '../Actions/Home';
import { addScore } from '../Actions/Game';
import { getRecords } from '../Actions/Scoreboard';

const mapStateToProps = (state) => {
  return {
    name: state.homeReducer.name,
    records: state.scoreboardReducer.records
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: bindActionCreators(setName, dispatch),
    addScore: bindActionCreators(addScore, dispatch),
    getRecords: bindActionCreators(getRecords, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
