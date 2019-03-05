import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
import Register from './components/Register'
import Header from './components/Header'
import NavT from './components/NavT'
import Home from "./components/Home"
import Bot from "./components/Bot"
import Account from './components/Account'
import PayIn from './components/PayIn'
import PayToll from './components/PayToll'
import './App.css';
import Investor from "./components/Investor"
import Wallet from "../src/components/Wallet"
import Error from "./components/Error"
import Setting from "./components/Setting"
import RegisterVehicle from "./components/RegisterVehicle"
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";
import Footer from './components/Footer';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
      wallet: null
    }
  }

  componentDidMount() {
    this.checkWallet();
  }

  checkWallet = () => {
    Axios.get("http://68.183.187.28:3000/api/wallet", {
      withCredentials: true
    }).then((res) => {
      console.log(res.data)
      this.setState({
        logged: true,
        wallet: res.data
      });
      // if (this.state.wallet.length == null) console.log("yes");
      // console.log(this.state.wallet)
     
    })
    .catch(err => {
      if(err.response.status === 401)
        this.setState({logged: false})
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={() => <SignIn status={this.state.logged}/>}/>
          <Route 
            path="/"
            exact={false}
            render={() => this.state.logged ? 
              <div>
                <div>
                  <Header />
                </div>
                <BrowserRouter>
                  <Switch>
                    <Route path="/register" component={() => <Register wallet={this.state.wallet} update={this.checkWallet}/>} />
                    <Route path="/investor" component={Investor} />
                             
                    <Route 
                      path="/" 
                      exact={false}
                      render={() => this.state.wallet === null || this.state.wallet.length > 0 
                        ?
                          <BrowserRouter>                
                            <div className="container-fluid" style={{"display":"flex"}}>
                              <NavT />
                              <Switch>
                                <Route path="/" render={() => this.state.wallet === [] ? <Redirect to="/register"/> : <Wallet wallet={this.state.wallet}/>} exact />
                                {/* <Route path="/" render={()=>{
                                   if (this.state.wallet.length===0) {
                                    <Redirect to ="/account"/>
                                  }
                                  else if (this.state.wal)
                                }} /> */}
                                <Route path="/account" component={Account} />
                                <Route path="/boteam" component={Bot} />
                                <Route path="/payin" component={PayIn} />
                                <Route path="/paytoll" component={PayToll} />
                                <Route path = "/register-vehicle" component={RegisterVehicle}/>
                                <Route path="/about" component={Home} />
                                 </Switch>
                            </div>
                          </BrowserRouter>
                        :
                          <Redirect to="/register" />
                      }
                    />
                  </Switch>
                </BrowserRouter>
              </div>
              : <Redirect to="/login"/>
            }
          /> 
        </Switch>     
      </BrowserRouter>
    );
  }
}

export default App;