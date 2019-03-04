import React, { Component } from 'react'
import axios from "axios"

import { Redirect } from 'react-router-dom'

class RegisterVehicle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id : "resource:org.bot.VehicleOwner#",
            
        };
    }
    componentWillMount(){
        axios.get(`
        http://68.183.187.28:3000/api/VehicleOwner`, {
            withCredentials: true
          }).then((res) => {
            let data = res.data;
            this.state.id +=data[0].identityId;
            console.log(this.state.id);
          })

    }
    register(){
        if(this.refs.Number.value !== ""
        && this.refs.Model.value !== ""
        && this.refs.dateRegistered.value !== ""
        && this.refs.dateProduced.value !== "") {
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
            }).then(res=>{
                console.log(res);
            }) .catch(e=>{
                console.log(e);
            })
        }
    }
    render(){
        return (
            <div className="container row VehicleInfo">
                    <span className="col-3">Thông tin phương tiện</span>
                    <div className="col-9 row info">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                            <div className="form-group">
                                <label>Biển số xe </label>
                                <input id="fullname" className="form-control" type="text" placeholder="89E1-42493" ref="Number"  />
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <input id="fullname" className="form-control" type="text" placeholder="Blade" ref="Model"  />
                            </div>
                            <div className="form-group">
                            <label>Kiểu xe</label>
                            <select ref="Type">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                           </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Ngày sản xuất</label>
                                <input id="fullname" className="form-control" type="text" placeholder="02/06/2006" ref="dateRegistered" />
                            </div>
                            <div className="form-group">
                                <label>Ngày đăng kí</label>
                                <input id="fullname" className="form-control" type="text" placeholder="05/08/2006" ref="dateProduced" />
                            </div>
                        </div>
                    <div className="form-group">
                    <button className ="btn btn-primary btn-lg" onClick={()=>this.register()}>DKi</button>
                    </div>

                    </div>
                    
            </div>
        )
    }
}
export default RegisterVehicle;