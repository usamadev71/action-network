import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Scoreboard } from '../../Pages/Scoreboard';
import { getRecords } from '../Actions/Scoreboard';

const mapStateToProps = (state) => {
  return {
    leaders: state.scoreboardReducer.leaders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: bindActionCreators(getRecords, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
