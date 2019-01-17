
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './containers/Signin/SignIn';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Redirect to="/signin" />
      </Switch>
    );
    return routes;
  }
}

export default App;
