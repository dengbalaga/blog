import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Home} from './components/Home';

import {Navigation} from './components/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">


        <Navigation></Navigation>

        <Switch>
          <Route path="/" component={Home} exact></Route>
         

        </Switch>



    </div>
    </BrowserRouter>
  );
}

export default App;
