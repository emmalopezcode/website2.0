import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreators';

import './App.css';
import {Main} from './Components/Main';

// State properties automatically passed to Main
function mapStateToProps(state) {
  return {
     Errs: state.Errs,
     isDarkMode : state.isDarkMode
  };
}

// Function properties automatically passed to Main
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));

export default App;
