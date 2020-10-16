import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Componetns/Home/Home/Home';
import Login from './Componetns/Login/Login/Login';
import PrivateRoute from './Componetns/Login/PrivateRoute/PrivateRoute';
import Error from './Componetns/Error/Error';
import Dashboard from './Componetns/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router >
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/dashBoard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
