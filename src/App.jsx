import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
