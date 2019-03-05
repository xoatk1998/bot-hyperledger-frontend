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
            info: null,
            numberVihcle: 0,
            licensePlate: 0,
            model: "",
            dateRegistered: "",
            dateProduced: "",
            selectValue: 0,
            vehicleArray:null,


        };
    }
    handleClick(e) {
        this.setState({
            numberVihcle: e.target.value,
        })
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
            console.log(`xe so ${this.state.numberVihcle}`)
            this.loadWallet()
        })



    }
    loadWallet() {
        axios.get("http://68.183.187.28:3000/api/WalletAccount", {
            withCredentials: true
        }).then((res) => {
            if (res.data.length===0) {
                this.setState({isLoaded:false})
            }else{
            this.setState({
                isLoaded : true,
                licensePlate: res.data[this.state.numberVihcle].licensePlate,
                info: res.data[this.state.numberVihcle],
                model: res.data[this.state.numberVihcle].info.model,
                dateRegistered: res.data[this.state.numberVihcle].info.dateRegistered,
                dateProduced: res.data[this.state.numberVihcle].info.dateProduced,
                vehicleArray:res.data
            });
            // this.renderOptions();
        }
        })
    }
    renderOptions() {
        if (this.state.vehicleArray === null) return <div></div>
        else {
            let option = this.state.vehicleArray.map((value,key) => {
                return (<option value={key} key={key}>  Xe {key + 1}  </option>)
            })
            return <select className="custom-select" style={{ "width": "85px" }} defaultValue={this.state.selectValue} onChange={(val) => { this.setState({ numberVihcle: val.target.value }, () => { this.loadWallet() }) }} >

                {
                    option
                }


            </select>
        }
        
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
                        {this.renderOptions()}
                        <div className="col-9 row info" style={{ "width": "813px ", "marginLeft": "240px" }}>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                <div className="form-group">
                                    <label>Biển số xe </label>
                                    <input className="form-control" type="text" value={this.state.licensePlate} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Model</label>
                                    <input className="form-control" type="text" value={this.state.model} readOnly />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label>Ngày sản xuất</label>
                                    <input className="form-control" type="text" value={this.state.dateProduced} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Ngày đăng kí</label>
                                    <input className="form-control" type="text" value={this.state.dateRegistered} readOnly />
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