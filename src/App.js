import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import Home from "../src/components/home"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {/* <SignIn/> */}
        
        {/* <Header /> */}
        
        {/* <NavT /> */}
        <Home />
      </div>
    );
  }
}

export default App;
