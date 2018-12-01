import React, { Component } from 'react';
import Home from './Home'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

class Containers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Containers;
