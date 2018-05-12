import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home';

class Routes extends Component {
  render = () => (
    <Switch>
      <Route exact path="/" component={RedirectToHome} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

const RedirectToHome = () => (
  <Redirect to="/home" />
);

export default Routes;