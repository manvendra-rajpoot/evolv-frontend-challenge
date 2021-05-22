import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Admin from './Admin';
import EditDish from './EditDish';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import User from './User';

const App = () => {
  const appName = 'evolv-frontend-challenge';
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path={`/${appName}/edit/:dishId`}>
            <EditDish />
          </Route>
          <Route path={`/${appName}/login`}>
            <Login />
          </Route>
          <Route path={`/${appName}/register`}>
            <Register />
          </Route>
          <Route path={`/${appName}/admin`}>
            <Admin />
          </Route>
          <Route path={`/${appName}/`}>
            <Header />
            <User />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
