import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wallet: this.props.wallet
        };
    }
    componentWillMount(){
        // console.log(this.state.wallet)
    }    

    componentWillReceiveProps(nextProps) {
        if (nextProps.wallet !== this.props.wallet) {
            console.log(nextProps.wallet)
            this.setState({ wallet: nextProps.wallet });
        }
    }

    render() {     
        if(this.state.wallet === null) {return <Redirect to="/" />}
        else if(this.state.wallet.length !== 0) {return <Redirect to="/" />}
        else return (
            <div style={{"padding": "0 20vw"}}>
                <div className="container-fluid row OwnerInfo d-flex flex-column col-12 align-items-center">
                    <h3 className="col-12 text-center pb-5 pt-4">Thông tin tài khoản</h3>
                    <div className="col-12 row info">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input id="fullname" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <input id="fullname" className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Căn cước công dân</label>
                                <input id="fullname" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>SĐT</label>
                                <input id="fullname" className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input id="fullname" className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-outline-success btn-lg">Cập nhật</button>
                </div>   
            </div>
        )

    }

}
export default Register