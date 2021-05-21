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
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/edit/:dishId'>
            <EditDish />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/'>
            <Header />
            <User />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
