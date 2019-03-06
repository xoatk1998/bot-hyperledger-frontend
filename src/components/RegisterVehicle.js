import React, { Component } from 'react'
import axios from "axios"

import { Redirect } from 'react-router-dom'

class RegisterVehicle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "resource:org.bot.VehicleOwner#",

        };
    }
    componentWillMount() {
        axios.get(`
        http://68.183.187.28:3000/api/VehicleOwner`, {
                withCredentials: true
            }).then((res) => {
                let data = res.data;
                this.state.id += data[0].identityId;
                console.log(this.state.id);
            })

    }
    register() {
        if (this.refs.Number.value !== ""
            && this.refs.Model.value !== ""
            && this.refs.dateRegistered.value !== ""
            && this.refs.dateProduced.value !== "") {
            this.setState({loading: true})
            axios.post('http://68.183.187.28:3001/api/registerWalletAccount', {
                "$class": "org.bot.registerWalletAccount",
                "licensePlate": this.refs.Number.value,
                "info": {
                    "$class": "org.bot.VehicleInfo",
                    "model": this.refs.Model.value,
                    "vehicleType": this.refs.Type.value,
                    "dateRegistered": this.refs.dateRegistered.value,
                    "dateProduced": this.refs.dateProduced.value,
                },
                "owners": [
                    this.state.id
                ],
            }).then(res => {
                console.log(res);
                this.setState({
                    finish: true
                })
            }).catch(e => {
                console.log(e);
            })
        }
        else {
            alert("Bạn phải nhập đầy đủ thông tin!")
        }
    }
    render() {
        if (this.state.finish) {
            return <Redirect to="/" />
        }
        return (
            <div className="container regVehicle">
                <div className="container-fluid row VehicleInfo">
                    <h5 className="col-4">Register vehicle</h5>
                    <div className="col-8 row info" style={{"marginTop":"5%","marginLeft":"-15%","paddingTop":"3%"}}>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                            <div className="form-group">
                                <label>License plate</label>
                                <input id="fullname" className="form-control" type="text" placeholder="Insert LicensePlate" ref="Number" />
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <input id="fullname" className="form-control" type="text" defaultValue="SH Mode" ref="Model" />
                            </div>
                            <div className="form-group">
                                <label>Transportation Type</label>
                                <select ref="Type" className="custom-select" defaultValue={1} style={{ "width": "85px", "marginLeft": "10px" }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" style={{ "marginLeft": "270px" }} onClick={() => this.register()}>Register</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Manufactoring date</label>
                                <input id="fullname" className="form-control" type="text" defaultValue="02/06/2006" ref="dateRegistered" />
                            </div>
                            <div className="form-group">
                                <label>Registering date</label>
                                <input id="fullname" className="form-control" type="text" defaultValue="05/08/2006" ref="dateProduced" />
                            </div>

                        </div>


                    </div>

                </div>
                {
                    this.state.loading ?
                    <div className="position-fixed" style={{'top':'8vh', 'left':'0', 'width': '100vw', 'height': '92vh', 'backgroundColor': '#00000010'}}>
                        <img className="position-relative" style={{'top': '22vh', 'left': '40vw'}} src={require('./../media/preloader4.gif')}></img>
                    </div>
                    : <div/>
                } 
            </div>
        )
    }
}
export default RegisterVehicle;