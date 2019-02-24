import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { Route, Link, Router } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_list: [
                {
                    id: 1,
                    name: "Tai khoan cua toi",
                    path: "/my-account",
                },
                {
                    id: 2,
                    name: "BOT",
                    path: "/bot",
                },
                {
                    id: 3,
                    name: "Lien He",
                    path: "/contact",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <ul className="nav nav-pills">
                        {/* Check the Css section for the selector */}
                        <li><Link to="/" activeClassName="active">Part A</Link></li>
                        <li><Link to="/" activeClassName="active">Part B</Link></li>
                        <li><Link to="/" activeClassName="active">Part C</Link></li>
                        <li><Link to="/" activeClassName="active">Part D</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;

