import React, { Component } from 'react';
import axios from "axios";
class PayIn extends Component {
    payIn(){
        if(this.refs.Amount.value !== ""
        && this.refs.Id.value !== ""){
            axios.post('http://68.183.187.28:3001/api/PayIn', {
                "$class": "org.bot.PayIn",
                "account": "resource:org.bot.WalletAccount#" + this.refs.Id.value,
                "ammount": this.refs.Amount.value,
            }).then(res=>{
                alert("Bạn đã nạp tiền !")
            }).catch(e=>{
                console.log(e);
            })
            
        }
        else {
            alert("Bạn phải nhập đầy đủ thông tin!")

        }
    }
    render() {
        return (
            <div className="container payin">
                <div className="titlePayin row">
                    <hr className="col-3 align-self-center" />
                    <p className="col-5">  Nạp tiền vào tài khoản</p>
                    <hr className="col-3 align-self-center" />
                </div>

                <div className="botName row">
                    <i className="fa fa-car fa-2x align-self-center"></i>
                    <h3 style={{ "marginLeft": "3%" }}>Trạm thu phí Teneocto</h3>
                </div>

                <div className="bodyPayin">
                    <div className="form-group">
                        <label >Nhập thông tin tài khoản nhận tiền</label>
                        <input type="text" className="form-control" id="licenseVihcle" placeholder="Biển số xe" ref ="Id"/>
                        <input type="number" className="form-control" id="amount" placeholder="Số tiền nạp" ref="Amount"/>
                    </div>

                    
                    <button className="btn charge" onClick={()=>this.payIn()}>NẠP TIỀN</button>
                </div>

                
            </div>
        )
    }
}
export default PayIn