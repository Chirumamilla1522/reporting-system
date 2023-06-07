import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  USER,
  INCIDENT,
  Company
} from './ui-components';

import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div className="options">
        <Link to="/user" className="option">
          User
        </Link>
        <Link to="/incident" className="option">
          Incident
        </Link>
        <Link to="/company" className="option">
          Company
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={USER} />
        <Route path="/incident" component={INCIDENT} />
        <Route path="/company" component={Company} />
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
