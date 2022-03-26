import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Home } from '../../Pages/Home';
import { setName } from '../Actions/Home';

const mapStateToProps = (state) => {
  return {
    name: state.homeReducer.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: bindActionCreators(setName, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
