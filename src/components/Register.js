import React, { Component } from 'react'
import axios from "axios"

import { Redirect } from 'react-router-dom'

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wallet: this.props.wallet,
            infoFull: true,
            uniqueId: true,
            finishRegister: false
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

    updateInfo() {
        if(this.refs.name.value !== ""
        && this.refs.address.value !== ""
        && this.refs.identity.value !== ""
        && this.refs.phone.value !== ""
        && this.refs.email.value !== "") {
            this.setState({loading: true});
            axios.post('http://68.183.187.28:3001/api/RegisterVehicleOwner', {
                "$class": "org.bot.RegisterVehicleOwner",
                "identityId": this.refs.identity.value,
                "profile": {
                    "$class": "org.bot.Profile",
                    "name": this.refs.name.value,
                    "phoneNumber": this.refs.phone.value,
                    "email": this.refs.email.value,
                    "address": {
                    "$class": "org.bot.Address",
                    "street": this.refs.address.value,
                    "district": "",
                    "city": "",
                    "zipcode": "",
                    }
                }
            }).then(res => {
                let identity = res.data.identityId
                console.log(res)
                axios({
                    method: 'post',
                    responseType: 'blob',
                    url: 'http://68.183.187.28:3001/api/system/identities/issue',
                    data: {
                        "participant": `org.bot.VehicleOwner#${identity}`,
                        "userID": identity,
                        "options": {}
                    }
                }).then(res => {
                    console.log(res);
                    const file = new File([res.data], 'myCard.card', {type: 'application/octet-stream'});
                    const formData = new FormData();
                    formData.append('card', file);

                    axios({
                        method: 'post',
                        url: 'http://68.183.187.28:3000/api/wallet/import',
                        withCredentials: true,
                        headers: {
                            'content-type': 'multipart/form-data'
                        },
                        data: formData
                    }).then(res => {
                        console.log(res);
                        this.props.update();
                    }).catch(err => {
                        console.log(err.response)
                    })
                }).catch(err => {
                    console.log(err.response)
                })
            }).catch(err => {
                if(err.response.data.error.message.includes("in collection with ID 'Participant:org.bot.VehicleOwner' as the object already exists") > -1) {
                    this.setState({
                        uniqueId: false,
                        loading: false
                    })
                }
            })
        } 
        else {
            this.setState({
                infoFull: false
            })
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
                                <input id="fullname" className="form-control" type="text" ref="name"/>
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <input id="fullname" className="form-control" type="text" ref="address"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Căn cước công dân</label>
                                <input id="fullname" className="form-control" type="number" ref="identity"/>
                            </div>
                            <div className="form-group">
                                <label>SĐT</label>
                                <input id="fullname" className="form-control" type="number" ref="phone"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input id="fullname" className="form-control" type="email" ref="email"/>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.infoFull
                        ? <div />
                        : <h5 className="text-danger text-center mb-4">Bạn cần điền đủ thông tin</h5>

                    }
                    {
                        this.state.uniqueId
                        ? <div />
                        : <h5 className="text-danger text-center mb-4">Căn cước công dân đã đăng ký</h5>

                    }
                    <button className="btn btn-outline-success btn-lg" onClick={() => this.updateInfo()}>Cập nhật</button>
                </div>  
                {
                    this.state.loading ?
                    <div className="position-fixed" style={{'top':'8vh', 'width': '60vw', 'height': '92vh', 'backgroundColor': '#00000010'}}>
                        <img className="position-relative" style={{'top': '22vh', 'left': '20vw'}} src={require('./../media/preloader4.gif')}></img>
                    </div>
                    : <div/>
                } 
            </div>
        )

    }

}
export default Register