import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './App.css';
import AlertContent from './components/alert/alert';
import authGuard from './hoc/AuthGuard';
import { actions } from './reducers/alert';
import MyResumes from './screens/myResumes/myResumes';
import LoadingState from './components/loadingState/loadingState';
import SignIn from './screens/signIn/signIn';
import SignUp from './screens/signUp/signUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.closeAlertHandler = this.closeAlertHandler.bind(this);
  }

  closeAlertHandler() {
    const { closeAlert } = this.props;
    closeAlert();
  }

  render() {
    const { error, isLoading, showAlert } = this.props;
    return (
      <CssBaseline>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/myresumes" exact component={authGuard(MyResumes)} />
          <Redirect to="/myresumes" />
        </Switch>
        {(isLoading && <LoadingState />)}
        <AlertContent
          onClose={this.closeAlertHandler}
          open={showAlert}
          variant="error"
          message={error}
        />
      </CssBaseline>
    );
  }
}

App.defaultProps = {
  error: null,
};

App.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  showAlert: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  error: state.alert.error,
  variant: state.alert.variant,
  showAlert: state.alert.showAlert,
  isLoading: state.loading.showLoader,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
