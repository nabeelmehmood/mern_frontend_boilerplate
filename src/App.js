import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route  path="/" exact>
              <Users />
            </Route>
            <Route  path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
    </Router>
  )
}

export default App;
