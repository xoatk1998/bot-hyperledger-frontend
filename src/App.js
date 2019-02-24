import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {/* <SignIn/> */}
        
        <Header />
        
        <NavT />
      </div>
    );
  }
}

export default App;
