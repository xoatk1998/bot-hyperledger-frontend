import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import Home from "../src/components/home"
import Account from './components/Account'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid row" style={{"display":"flex"}}>
        <NavT />
        <Account />
          {/* <div className="">
            <NavT />
          </div>
          <div className="col-8">
            <Account />
          </div> */}
        {/* <SignIn/> */}
          
          {/* <Header />
          
          <NavT /> */}
          {/* <Home /> */}
          
        </div>
      </div>
    );
  }
}

export default App;
