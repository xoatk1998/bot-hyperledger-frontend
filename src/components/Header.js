import React, {Component} from 'react';
class Header extends Component{
    render(){
        return(
            <div className="container-fluid  row header">
                <div className="col-8 logo"><h2><i className="fa fa-bitcoin fa-md"></i><span>OTEAM</span></h2></div>
                <div className="container-fluid col-4 menu">
                    <i className="fa fa-bell-o fa-lg align-self-center" style={{"color":"white","marginRight":"5%"}}></i>
                    <h3 className="col-6 align-self-center">Bạn cần trợ giúp?</h3>
                    <h3 className="col-6 align-self-center">SignOut</h3>
                </div>
            </div>
        )
    }
}
export default Header