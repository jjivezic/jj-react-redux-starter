import React, { useEffect,Suspense } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
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
      <Suspense fallback={"add loader here"}>
      <main className="main-wrapper">
        <Router history={history}>
          <Routes />
        </Router>
      </main>
      </Suspense>
    </div>
  );
}

export default App;
