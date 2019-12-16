import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import OnlineStore from './pages/OnlineStore';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OnlineStore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
