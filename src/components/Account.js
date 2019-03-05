import React, { Component } from 'react'
import axios from "axios"

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: null,
            identityId: 0,
            name: "",
            address: "",
            phonenumber: 0,
            email: "",
            numberWallet: 0,
            info: [],
            numberVihcle:0,
            licensePlate:null,
            model :null,



        };
    }
    
    componentDidMount() {
        let self = this;
        axios.get("http://68.183.187.28:3000/api/VehicleOwner", {
            withCredentials: true
        }).then((res) => {
            // console.log(res.data[0])
            this.setState({
                name: res.data[0].profile.name,
                phonenumber: res.data[0].profile.phoneNumber,
                email: res.data[0].profile.email,
                identityId: res.data[0].identityId,
                address: res.data[0].profile.address.street + res.data[0].profile.address.district + res.data[0].profile.address.city,
            })
        })


        axios.get("http://68.183.187.28:3000/api/WalletAccount", {
            withCredentials: true
        }).then((res) => {
            if (res.data.length===0) {
                this.setState({isLoaded:false})
            }else{
            this.setState({
                isLoaded : true,
                info: res.data[this.state.numberVihcle],
                
            },
            ()=>{
                console.log(this.state.info);
            });
            console.log(res.data)}

        })
    }

    render() {

        if (this.state.isLoaded || this.state.isLoaded ===null)
        
        return (

            <div className="container account" >
                <div className="container-fluid row OwnerInfo">
                    <span className="col-3">Thông tin chủ tài khoản</span>
                    <div className="col-9 row info">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input id="fullname" className="form-control" type="text" value={this.state.name} readOnly />


                            </div>
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <input id="fullname" className="form-control" type="text" value={this.state.address} readOnly />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Căn cước công dân</label>
                                <input id="fullname" className="form-control" type="text" value={this.state.identityId} readOnly />
                            </div>
                            <div className="form-group">
                                <label>SĐT</label>
                                <input id="fullname" className="form-control" type="text" value={this.state.phonenumber} readOnly />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container row VehicleInfo">
                    <span className="col-3">Thông tin phương tiện</span>
                    <div className="infoVihcle">
                        {/* <select className ="custom-select" style={{"width" :"85px"}} value={this.state.selectValue} onChange={ (val)=>{this.setState({numberVihcle:val})}} ref="numberVihcle">
                            <option value="0">Xe 1</option>
                            <option value="1">Xe 2</option>
                        </select>  */}
                        <div className="col-9 row info" style={{"width":"813px ","marginLeft":"240px"}}>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                <div className="form-group">
                                    <label>Biển số xe </label>
                                    <input  className="form-control" type="text" defaultValue={this.state.info.licensePlate} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Model</label>
                                    <input  className="form-control" type="text" defaultValue={this.state.info.model} readOnly/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label>Ngày sản xuất</label>
                                    <input  className="form-control" type="text" value="02/06/2006" readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Ngày đăng kí</label>
                                    <input  className="form-control" type="text" value="05/08/2006" readOnly />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
        
    else{
        return(
            <div>Ban chua dang ki, quay lai trang wallet de dang ki hoac dang ki theo link sau   <a href="/register-vehicle">Dang ki</a></div>
        )
    }
    }

}
export default Account