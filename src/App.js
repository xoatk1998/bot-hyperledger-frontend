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
import Wallet from "../src/components/Wallet"
import Error from "./components/Error"
import Setting from "./components/Setting"
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
    Axios.get("http://68.183.187.28:3000/api/wallet", {
      withCredentials: true
    }).then((res) => {
      console.log(res.data)
      this.setState({
        logged: true,
        wallet: res.data
      })
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
                    <Route path="/register" component={() => <Register wallet={this.state.wallet}/>} />
                    <Route 
                      path="/" 
                      exact={false}
                      render={() => this.state.wallet === null || this.state.length > 0 
                        ?
                          <BrowserRouter>                
                            <div className="container-fluid" style={{"display":"flex"}}>
                              <NavT />
                              <Switch>
                                <Route path="/" render={() => this.state.wallet === [] ? <Redirect to="/register"/> : <Wallet wallet={this.state.wallet}/>} exact />
                                <Route path="/account" component={Account} />
                                <Route path="/boteam" component={Bot} />
                                <Route path="/payin" component={PayIn} />
                                <Route path="/paytoll" component={PayToll} />
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