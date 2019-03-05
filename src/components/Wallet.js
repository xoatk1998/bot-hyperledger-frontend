

import React, { Component } from "react";
import axios from "axios";
import History from './History'
import RegisterVehicle from './RegisterVehicle'
import {Redirect} from 'react-router-dom'
import "../css/wallet.css"

// import { css } from '@emotion/core';

import { PacmanLoader } from 'react-spinners';



class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            number : 1,
            info :null,
            accountBalance:-1,
            licensePlate:null,
            calledApi:false,
            HasWallet:false,
            numberWallet:0,
            walletArray:null,
            selectValue:0

            

        };
    }
    componentDidMount(){
        axios.get(`
        http://68.183.187.28:3001/api/WalletAccount`, {
            withCredentials: true
          }).then((res) => {
            if(res.data.length > 0)  {
                this.setState({
                    accountBalance : res.data[this.state.numberWallet].accountBalance,
                    licensePlate : res.data[this.state.numberWallet].licensePlate,
                    info : res.data,
                    calledApi:true,
                    walletArray:res.data
                })
                console.log(this.state.info)                
            }
            else {
                this.setState({
                    accountBalance : -1,
                    licensePlate : 'unsete',
                    info : [],
                    calledApi:true,
                })
            }
          })

    }
    loadingPage(){
        if (this.state.info === null){
            return(
            
            <PacmanLoader
            //    css={override}
              sizeUnit={"px"}
              size={35}
              color={'#123abc'}
              loading= {this.state.isLoaded}
            />
            )
        }
    }
    renderOption(){
        if(this.state.walletArray===null) return <div />
        else{
            let option = this.state.walletArray.map((value,key)=>{
                return (<option value={key} key={key}>  Vehicle {key + 1}  </option>)
            })
            return <select className="custom-select" style={{ "width": "125px" }} defaultValue={this.state.selectValue} onChange={(val) => { this.setState({ numberWallet: val.target.value }, () => { this.componentDidMount() }) }} >

                {
                    option
                }


            </select>
        }
    }
    render() {
        if(this.state.register) return <Redirect to="/register-vehicle"></Redirect>
        const { error } = this.state;
        if (error) {
            return <div>error</div>
        }
        // else if (this.state.info.length === 0){
        //     return( <div>
        //         info
        //         </div>)
        // }
        else{
            // if(this.state.info) {return <RegisterVehicle calledApi={true} />}
            if(this.state.info==null) return(
                <div className="position-fixed" style={{'top':'8vh', 'left':'0', 'width': '100vw', 'height': '92vh', 'backgroundColor': '#00000010'}}>
                    <img className="position-relative" style={{'top': '22vh', 'left': '40vw'}} src={require('./../media/preloader4.gif')}></img>
                </div>
                )
            else{
                // if (this.state.info !== null)
                if(this.state.info.length == 0 || this.state.accountBalance===undefined) return <Redirect to="/register-vehicle" />
                else{
                    return (
                        <div className="container" style ={{"backgroundColor": "#eaeaea78"}}>
                            <div className=" row justify-content-center">
                                <div className="col-sm-10 ">
                                    <div className="box_thongtin_sodu_ud">
                                        <div className="row">
                                            <div className="col-10">
                                                <div className="text_tieude_all_ud">Credit Information </div>
                                                <hr style={{"width" :"20%"}}/>
                                            </div>
                                            <div className="col-2">
                                                <button className="btn btn-info " onClick={()=>{this.setState({register:true})}}>Add Wallet</button>
                                            </div>
                                        </div>
                                        {this.renderOption()}
                                        <div className="box_all_tien_user_ud">
                                            Account Balance :
                                
                                <em>{this.state.accountBalance} VND</em>
                                {/* <em> {this.state.accountBalance}</em> */}
                                        </div>
                                        <div className="box_all_tien_user_ud">
                                            License Plate :
                                <em>{this.state.licensePlate}</em>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                            <History licensePlate = {this.state.licensePlate} />
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
        }
    }
}
export default Wallet;
