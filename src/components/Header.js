import React, {Component} from 'react';
class Header extends Component{
    render(){
        return(
            <div className="container-fluid  row header">
                <div className="col-8 logo"><h2><i className="fa fa-bitcoin fa-md"></i><span>OTEAM</span></h2></div>
                <div className="container-fluid col-4 menu d-flex flex-row-reverse">
                    {/* <i className="fa fa-bell-o fa-lg align-self-center" style={{"color":"white","marginRight":"5%"}}></i> */}
                    {/* <h3 className="col-6 align-self-center">Bạn cần trợ giúp?</h3> */}
                    <a className="col-3 align-self-center text-white ml-5 pl-5 mr-5" href="http://68.183.187.28:3000/auth/logout">SignOut</a>
                </div>
            </div>
        )
    }
}
export default Header