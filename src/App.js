import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./App.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IPzN8FUE3j9ahFn8eZbt65bjZjmChXHLpDzjiKulVWmnJK53VN0XX7NlbF6i26rgY8GuCOt7KBY1af7CwZvTzrv00OAooTFUt')

export default function App() {
  const [{}, dispatch] = useStateValue();
  //Add a listener here, which will keep track or will listen when user is logged in or logged out.
  // This will be done using useEffect hook. Lets see how -
  // Plus also store the user in the context (reducer.js)
  useEffect(() => {
    // will only runs once when app components loads. When a user logs in, this code is always listening.

    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          //Every time user logs in, it shoots the user into data layer
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user logged out. So value be null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe = {promise}>
            <Payment />
            </Elements>
          
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// export default App;
