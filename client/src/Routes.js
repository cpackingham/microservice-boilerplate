import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';

class Routes extends Component {
  render = () => (
    <Switch>
      <Route exact path="/" component={RedirectToHome} />
      <Route path="/home" component={Home} />
      <Route path="/counter" component={Counter} />
    </Switch>
  );
}

const RedirectToHome = () => (
  <Redirect to="/home" />
);

export default Routes;