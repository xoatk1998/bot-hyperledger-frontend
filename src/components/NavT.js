import React, {Component} from 'react'
import Home from "../components/home"
// import {BrowserRouter, Link,Router,Route} from "react-router-dom"
class NavT extends Component{
    render(){
        return(
            <div className="container-fluid col-2 sidenav">
                <div className="info">
                    <ul>
                        <li>
                            <a href="/home">
                                
                                <i className="fa fa-bank fa-2x align-self-center"></i>
                                <span>Wallet</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-user-circle fa-2x align-self-center"></i>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-home fa-2x"></i>
                                <span>BOT</span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className="transaction">
                    <h5>Transaction</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-money fa-2x"></i>
                                <span>Payin</span>
                            </a>
                        </li>
                        <li> 
                            <a href="#">
                                <i className="fa fa-exchange fa-2x"></i>
                                <span>PayToll</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="introduce">
                <h5>About</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-users fa-2x"></i>
                                <span>HyperTeam</span>
                            </a>
                        </li>
                        <li> 
                            <a href="#">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span>Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}  
export default NavT