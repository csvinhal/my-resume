
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './screens/signIn/signIn';
import SignUp from './screens/signUp/signUp';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/signin" />
        </Switch>
      </CssBaseline>
    );
  }
};

export default App;
