import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';
import GitHubRepo from './components/github-repo/GitHubRepo';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
      <GitHubRepo />
    </div>
  );
}

export default App;
