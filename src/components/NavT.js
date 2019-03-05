import React, { Component } from 'react'

import { NavLink } from "react-router-dom"
// import {BrowserRouter, Link,Router,Route} from "react-router-dom"
class NavT extends Component {
    render() {
        return (
            <div className="container-fluid col-2 sidenav">
                <div className="info">
                    <ul>
                        <li>
                            <NavLink to="/">

                                <i className="fa fa-bank fa-2x align-self-center"></i>
                                <span>Wallet</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">
                                <i className="fa fa-user-circle fa-2x align-self-center"></i>
                                <span>Account</span>
                            </NavLink>

                        </li>
                        
                    </ul>

                </div>
                <div className="transaction">
                    <h5>Transaction</h5>
                    <ul>
                        <li>
                            <NavLink to="/payin">
                                <i className="fa fa-money fa-2x"></i>
                                <span>Payin</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/paytoll">
                                <i className="fa fa-exchange fa-2x"></i>
                                <span>PayToll</span>
                            </NavLink>

                        </li>
                    </ul>
                </div>
                <div className="introduce">
                    <h5>About</h5>
                    <ul>
                        <li>
                            <NavLink to="/about">
                                <i className="fa fa-users fa-2x"></i>
                                <span>BOTeam</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/setting">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span>Setting</span>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default NavT