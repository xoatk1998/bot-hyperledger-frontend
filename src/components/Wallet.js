

import React, { Component } from "react";
import axios from "axios";
import History from './History'
import RegisterVehicle from './RegisterVehicle'
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

            

        };
    }
    componentDidMount(){
        axios.get(`
        http://68.183.187.28:3000/api/WalletAccount`, {
            withCredentials: true
          }).then((res) => {
            if(res.data.length > 0)  {
                this.setState({
                    accountBalance : res.data[0].accountBalance,
                    licensePlate : res.data[0].licensePlate,
                    info : res.data,
                    calledApi:true,
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
    render() {
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
            
                <PacmanLoader
                //    css={override}
                  sizeUnit={"px"}
                  size={35}
                  color={'#123abc'}
                  loading= {this.state.isLoaded}
                />
                )
            else{
                // if (this.state.info !== null)
                if(this.state.info.length == 0 || this.state.accountBalance===undefined) return <RegisterVehicle />
                else{
                    return (
                        <div className="container" style ={{"backgroundColor": "#eaeaea78"}}>
                            <div className=" row justify-content-center">
                                <div className="col-sm-10 ">
                                    <div className="box_thongtin_sodu_ud">
                                        <div className="text_tieude_all_ud">Credit Information </div>
                                        <hr style={{"width" :"20%"}}/>
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
                            <History />
        
                        </div>
                        
                    )
                }
            }
        }
    }
}
export default Wallet;
