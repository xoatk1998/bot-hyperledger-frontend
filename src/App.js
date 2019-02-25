import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import Home from './components/home'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      {/* <SignIn/> */}
        <Home />
        {/* <Header />
        <NavT /> */}
        {/* <Router>
          <Switch>
            <Route
            path='/login'
            
            component={() => <NavT />} 
            />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
