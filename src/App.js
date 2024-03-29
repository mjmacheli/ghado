import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shopPage.component';
import Header from './components/header/header.component';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/category' component={shopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
