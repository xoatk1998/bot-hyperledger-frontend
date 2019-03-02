import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            failed: false,
            loggedUser: this.props.status
        };
    }

    // requestLogin(username, pass) {
    // 	fetch(API, { 
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "password": pass,
    //             "username": username
    //         })
    //     }).then(res => res.json()).then(
    //         (result) => {
    //             if(result.error === undefined){
    //             	this.props.defineUser({
    //                     username: result.username,
    //                     token: result.token_type + " " + result.access_token
    //                 });
    //             }

    //             else{
    //             	this.setState({
    //                 	failed : true
    //             	});
    //             }

    //         },
    //         (error) => {
    //              console.log(error);
    //         }
    //     );
    // }
    // componentDidMount() {
    // 	var input = document.getElementById("formLogin");
    // 	if(input){
    // 		// Execute a function when the user releases a key on the keyboard
    // 		input.addEventListener("keyup", function(event) {
    // 		  // Cancel the default action, if needed
    // 		  event.preventDefault();
    // 		  // Number 13 is the "Enter" key on the keyboard
    // 		  if (event.keyCode === 13) {
    // 		    // Trigger the button element with a click
    // 		    document.getElementById("submit").click();
    // 		  }
    // 		});
    // 	}
    // }

    refetchData = () => {
        this.componentDidMount();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status !== this.props.status) {
            this.setState({ loggedUser: nextProps.status });
        }
    }

    render() {
        let loggedUser = this.state.loggedUser;
        console.log(loggedUser)
        if (loggedUser) {
            return <Redirect to="/" />
        }

        // let className = 'login100-form-error';
        // if (this.state.failed) {
        //     className += ' active';
        // }
        return (
            
            <div className="limiter">
            <div className="container-login100" style={{"backgroundImage": "url('images/bg-01.jpg')"}}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <form className="login100-form validate-form">
                    
                        {/* <span className="login100-form-title p-b-49">
                            Login
                        </span>

                        <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                            <span className="label-input100">Username</span>
                            <input className="input100" type="text" name="username" placeholder="Type your username"/>
                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="password" name="pass" placeholder="Type your password"/>
                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                        </div>
                        
                        <div className="text-right p-t-8 p-b-31">
                            <a href="#">
                                Forgot password?
                            </a>
                        </div> */}
                        
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <a className="login100-form-btn" href="http://localhost:3000/auth/github">
                                    Login with Github
                                </a>
                            </div>
                        </div>

                        {/* <div className="txt1 text-center p-t-54 p-b-20">
                            <span>
                                Or Sign Up Using
                            </span>
                        </div>

                        <div className="flex-c-m">
                            <a href="#" className="login100-social-item bg1">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#" className="login100-social-item bg2">
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a href="#" className="login100-social-item bg3">
                                <i className="fa fa-google"></i>
                            </a>
                        </div>

                        <div className="flex-col-c p-t-155">
                            <span className="txt1 p-b-17">
                                Or Sign Up Using
                            </span>

                            <a href="#" className="txt2">
                                Sign Up
                            </a>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
        )
        };
}
export default SignIn
