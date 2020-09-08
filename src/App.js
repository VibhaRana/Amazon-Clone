import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
   <Switch>
     <Route path = '/checkout'>
     <Header />
     <Checkout />
     
     </Route>
     <Route path = '/login'>
     {/* <Header /> */}
       <h1>Login Page</h1>
     </Route>
     <Route exact path = '/'>
     <Header />
     <Home />
      
     </Route>
   </Switch>
  
    </div>
    </Router>
  );
}

export default App;
