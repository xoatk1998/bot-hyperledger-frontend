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
            vehicleArray: null,


        };
    }
    handleClick(e) {
        this.setState({
            numberVihcle: e.target.value,
        })
    }
    componentDidMount() {
        this.setState({ loading: true })
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
        this.setState({ loading: true })
        axios.get("http://68.183.187.28:3000/api/WalletAccount", {
            withCredentials: true
        }).then((res) => {
            if (res.data.length === 0) {
                this.setState({ isLoaded: false })
            } else {
                this.setState({ loading: false })
                this.setState({
                    isLoaded: true,
                    licensePlate: res.data[this.state.numberVihcle].licensePlate,
                    info: res.data[this.state.numberVihcle],
                    model: res.data[this.state.numberVihcle].info.model,
                    dateRegistered: res.data[this.state.numberVihcle].info.dateRegistered,
                    dateProduced: res.data[this.state.numberVihcle].info.dateProduced,
                    vehicleArray: res.data
                });
                // this.renderOptions();
            }
        })
    }
    renderOptions() {
        if (this.state.vehicleArray === null) return <div></div>
        else {
            let option = this.state.vehicleArray.map((value, key) => {
                return (<option value={key} key={key}>  Vehicle {key + 1}  </option>)
            })
            return <select className="custom-select ml-3 mt-3" style={{ "width": "125px" }} defaultValue={this.state.selectValue} onChange={(val) => { this.setState({ numberVihcle: val.target.value }, () => { this.loadWallet() }) }} >

                {
                    option
                }


            </select>
        }

    }
    render() {

        if (this.state.isLoaded || this.state.isLoaded === null)

            return (

                <div className="container account" >
                    <div className="container-fluid row OwnerInfo">
                        <span className="col-3">Vehicle Owner Information</span>
                        <div className="col-9 row info">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                <div className="form-group">
                                    <label>Full name</label>
                                    <input id="fullname" className="form-control" type="text" value={this.state.name} readOnly />


                                </div>
                                <div className="form-group">
                                    <label>Addresss</label>
                                    <input id="fullname" className="form-control" type="text" value={this.state.address} readOnly />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label>Identity ID</label>
                                    <input id="fullname" className="form-control" type="text" value={this.state.identityId} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input id="fullname" className="form-control" type="text" value={this.state.phonenumber} readOnly />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="container row VehicleInfo">
                        <span className="col-3">Vehicle Information</span>
                        <div className="infoVihcle">
                            {this.renderOptions()}
                            <div className="col-9 row info" style={{ "width": "813px ", "marginLeft": "240px" }}>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                    <div className="form-group">
                                        <label>License Plate</label>
                                        <input className="form-control" type="text" value={this.state.licensePlate} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Model</label>
                                        <input className="form-control" type="text" value={this.state.model} readOnly />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="form-group">
                                        <label>Manufacturing date</label>
                                        <input className="form-control" type="text" value={this.state.dateProduced} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Registering date</label>
                                        <input className="form-control" type="text" value={this.state.dateRegistered} readOnly />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {
                        this.state.loading ?
                            <div className="position-fixed" style={{ 'top': '8vh', 'left': '0', 'width': '100vw', 'height': '92vh', 'backgroundColor': '#00000010' }}>
                                <img className="position-relative" style={{ 'top': '22vh', 'left': '40vw' }} src={require('./../media/preloader4.gif')}></img>
                            </div>
                            : <div />
                    }
                </div>
            )

        else {
            return (
                <div className="container account" >
                    <h4 className="mt-5 ml-5 d-inline">No vehicle registered <a href="/register-vehicle"><h4>register here</h4></a></h4>
                </div>
            )
        }
    }

}
export default Account