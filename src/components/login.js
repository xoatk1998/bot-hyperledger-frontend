// import React, { Component } from 'react';


// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             data: null,
//             failed: false
//         };
//     }

//     // requestLogin(username, pass) {
//     // 	fetch(API, { 
//     //         method: 'post',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //             "password": pass,
//     //             "username": username
//     //         })
//     //     }).then(res => res.json()).then(
//     //         (result) => {
//     //             if(result.error === undefined){
//     //             	this.props.defineUser({
//     //                     username: result.username,
//     //                     token: result.token_type + " " + result.access_token
//     //                 });
//     //             }

//     //             else{
//     //             	this.setState({
//     //                 	failed : true
//     //             	});
//     //             }

//     //         },
//     //         (error) => {
//     //              console.log(error);
//     //         }
//     //     );
//     // }
//     // componentDidMount() {
//     // 	var input = document.getElementById("formLogin");
//     // 	if(input){
//     // 		// Execute a function when the user releases a key on the keyboard
//     // 		input.addEventListener("keyup", function(event) {
//     // 		  // Cancel the default action, if needed
//     // 		  event.preventDefault();
//     // 		  // Number 13 is the "Enter" key on the keyboard
//     // 		  if (event.keyCode === 13) {
//     // 		    // Trigger the button element with a click
//     // 		    document.getElementById("submit").click();
//     // 		  }
//     // 		});
//     // 	}
//     // }

//     refetchData = () => {
//         this.componentDidMount();
//     }

//     render() {
//         let loggedUser = localStorage.getItem('user');
//         if (loggedUser !== null) {
//             return <Redirect to="/" />
//         }

//         let className = 'login100-form-error';
//         if (this.state.failed) {
//             className += ' active';
//         }
//         return (
//             <div class="limiter">
//             <div class="container-login100" style="background-image: url('images/bg-01.jpg');">
//                 <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
//                     <form class="login100-form validate-form">
//                         <span class="login100-form-title p-b-49">
//                             Login
//                         </span>

//                         <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
//                             <span class="label-input100">Username</span>
//                             <input class="input100" type="text" name="username" placeholder="Type your username"/>
//                             <span class="focus-input100" data-symbol="&#xf206;"></span>
//                         </div>

//                         <div class="wrap-input100 validate-input" data-validate="Password is required">
//                             <span class="label-input100">Password</span>
//                             <input class="input100" type="password" name="pass" placeholder="Type your password"/>
//                             <span class="focus-input100" data-symbol="&#xf190;"></span>
//                         </div>
                        
//                         <div class="text-right p-t-8 p-b-31">
//                             <a href="#">
//                                 Forgot password?
//                             </a>
//                         </div>
                        
//                         <div class="container-login100-form-btn">
//                             <div class="wrap-login100-form-btn">
//                                 <div class="login100-form-bgbtn"></div>
//                                 <button class="login100-form-btn">
//                                     Login
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="txt1 text-center p-t-54 p-b-20">
//                             <span>
//                                 Or Sign Up Using
//                             </span>
//                         </div>

//                         <div class="flex-c-m">
//                             <a href="#" class="login100-social-item bg1">
//                                 <i class="fa fa-facebook"></i>
//                             </a>

//                             <a href="#" class="login100-social-item bg2">
//                                 <i class="fa fa-twitter"></i>
//                             </a>

//                             <a href="#" class="login100-social-item bg3">
//                                 <i class="fa fa-google"></i>
//                             </a>
//                         </div>

//                         <div class="flex-col-c p-t-155">
//                             <span class="txt1 p-b-17">
//                                 Or Sign Up Using
//                             </span>

//                             <a href="#" class="txt2">
//                                 Sign Up
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         )
//         };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
