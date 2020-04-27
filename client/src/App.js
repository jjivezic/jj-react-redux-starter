import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Navbar from './_components/navbar/navbar';
import Login from './_components/auth/loginComponent/login';
import { Routes } from './_routes/routes';
import { history } from './_utils';

const App = () => {
  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
    });
}, []);
  return (
    <div className="App">
      <main className="main-wrapper">
        <Router history={history}>
          <Routes />
        </Router>
      </main>
    </div>
  );
}

export default App;
