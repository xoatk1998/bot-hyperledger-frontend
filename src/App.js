import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {/* <SignIn/> */}
        
        <Header />
        
        <Nav />
      </div>
    );
  }
}

export default App;
