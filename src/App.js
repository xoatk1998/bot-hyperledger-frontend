import React, { Component } from 'react';
// import logo from './logo.svg';
// import SignIn from 'SignIn';
import Home from '../src/components/home'
import Footer from '../src/components/footer'
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import Nav from './components/Nav'
import './App.css';


import Navbar from './components/nav'
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
