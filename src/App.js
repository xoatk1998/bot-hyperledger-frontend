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
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/api/wallet", {
      withCredentials: true
    }).then((res) => {
      console.log(res)
      this.setState({logged: true})
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
          <Route path="/login" exact={false} component={() => <SignIn status={this.state.logged}/>}/>
          <Route 
            path="/"
            exact={false}
            render={() => this.state.logged ? 
              <div>
                <div>
                  <Header />
                </div>
                <BrowserRouter>                
                  <div className="container-fluid" style={{"display":"flex"}}>
                    <NavT />
                    <Switch>
                      <Route path="/" component={Wallet} exact />
                      <Route path="/account" component={Account} />
                      <Route path="/boteam" component={Bot} />
                      <Route path="/payin" component={PayIn} />
                      <Route path="/paytoll" component={PayToll} />
                      <Route path="/account" component={Account} />
                      <Route path="/account" component={Account} />
                      <Route path="/account" component={Account} />
                    </Switch>
                  </div>
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