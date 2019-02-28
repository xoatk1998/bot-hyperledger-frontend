import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Header from './components/Header'
import NavT from './components/NavT'
import Home from "./components/Home"
import Bot from "./components/Bot"
import Account from './components/Account'
import PayIn from './components/PayIn'
import PayToll from './components/PayToll'
import './App.css';
import Wallet from "../src/components/Wallet"
import Error from "./components/Error"
import Setting from "./components/Setting"
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      
     
        
        <BrowserRouter>
          <div>
            <Header />
            <div className="container-fluid" style={{"display":"flex"}}>
              <NavT />
              <Switch>
                <Route path="/" component={Wallet} exact />
                <Route path="/account" component={Account} />
                <Route path="/boteam" component={Bot} />
                <Route path="/payin" component={PayIn} />
                <Route path="/paytoll" component={PayToll} />
                <Route path="/setting" component={Setting} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
     
      // <div>
      //   <Header />
        


      //     <NavT />
      //     {/* <Home /> */}
      //     <Wallet />
      //     {/* <Account /> */}
      //   </div>
      // </div>
    );
  }
}

export default App;