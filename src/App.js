
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import authGuard from './hoc/AuthGuard';
import MyResume from './screens/signIn/myResume/myResume';
import SignIn from './screens/signIn/signIn';
import SignUp from './screens/signUp/signUp';

class App extends React.Component {
  render() {
    return (
      <CssBaseline>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={authGuard(MyResume)} />
          <Redirect to="/signin" />
        </Switch>
      </CssBaseline>
    );
  }
}

export default App;
