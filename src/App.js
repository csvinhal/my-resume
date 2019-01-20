
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import authGuard from './hoc/AuthGuard';
import Resumes from './screens/signIn/resumes/resumes';
import SignIn from './screens/signIn/signIn';
import SignUp from './screens/signUp/signUp';

const App = () => (
  <CssBaseline>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/resumes" exact component={authGuard(Resumes)} />
      <Redirect to="/resumes" />
    </Switch>
  </CssBaseline>
);

export default App;
