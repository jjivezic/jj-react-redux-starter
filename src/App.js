import React, { useEffect,Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes } from './_routes/routes';
import { history } from './_utils';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.scss';

const App = () => {
  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
    });
}, []);

  return (
    <div className="App">
      <Suspense fallback={"add loader here"}>
        <HashRouter history={history}>
          <Routes />
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
