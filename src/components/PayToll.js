import React, { Component } from 'react';
import axios from "axios";
class PayToll extends Component {
    
    payToll(){
        if(this.refs.Id.value !== ""){
            axios.post('http://68.183.187.28:3000/api/PayToll', {
                "$class": "org.bot.PayToll",
                "account": "resource:org.bot.WalletAccount#" + this.refs.Id.value,
                },{
                withCredentials: true
            }).then(res=>{
                alert("Bạn đã thanh toan !")
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
                    <hr className="col-4 align-self-center" />
                    <p className="col-2" style={{"paddingLeft":"2%"}}>  Mua vé</p>
                    <hr className="col-4 align-self-center" />
                </div>

                <div className="botName row">
                    <i className="fa fa-car fa-2x align-self-center"></i>
                    <h3 style={{ "marginLeft": "3%" }}>Trạm thu phí Teneocto</h3>
                </div>

                <div className="bodyPayin">
                    <div className="form-group">
                        <label >Xe mua vé :</label>
                        <input type="text" className="form-control" id="licenseVihcle" ref ="Id" />
                        <label >Trạm thu phí :</label>
                        <input type="text" className="form-control" id="licenseVihcle" value="Trạm thu phí Ninh Bình" readOnly />
                    </div>

                   
                    <button className="btn charge" onClick={()=>this.payToll()}>Thanh toán</button>
                </div>

                
            </div>
        )
    }
}
export default PayToll