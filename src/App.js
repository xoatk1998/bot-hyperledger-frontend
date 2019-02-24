import React, { Component } from 'react';
// import logo from './logo.svg';
// import SignIn from 'SignIn';
import Home from '../src/components/home'
import Footer from '../src/components/footer'
import logo from './logo.svg';
import SignIn from './components/SignIn';
import './App.css';

// import Navbar from './components/nav';
import Navbar from './components/nav'
class App extends Component {
  render() {
    return (
      <Home />
      // <Navbar />
      // <Footer />
    );
  }
}

export default App;
