import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import Home from "../src/components/home"
import Account from './components/Account'
import './App.css';
import Wallet from "../src/components/wallet"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/footer';

class App extends Component {
  choosenScreen() {
    
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid" style={{ "display": "flex" }}>


          <NavT />
          {/* <Home /> */}
          <Wallet />
          {/* <Account /> */}
        </div>
      </div>
    );
  }
}

export default App;
