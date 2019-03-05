import React, {Component} from 'react';
class Header extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    render(){
        console.log(this.props);
        return(
            <div className="container-fluid  row header">
                <div className="col-4 logo"><h2><i className="fa fa-bitcoin fa-md"></i><span>OTEAM</span></h2></div>
                <div className="container-fluid col-8 menu d-flex flex-row-reverse">
                    {/* <i className="fa fa-bell-o fa-lg align-self-center" style={{"color":"white","marginRight":"5%"}}></i> */}
                    {/* <h3 className="col-6 align-self-center">Bạn cần trợ giúp?</h3> */}
                    {/* <a className="col-3 align-self-center text-white ">Hello ! user : {this.props.name}</a> */}
                    <a className="col-2 align-self-center text-white ml-1 pl-1 mr-2" href="http://68.183.187.28:3000/auth/logout">SignOut</a>
                    <a className="col-4 align-self-center text-white pl-5 " >Hello ! user : {this.props.name}</a>
                </div>
            </div>
        )
    }
}
export default Header