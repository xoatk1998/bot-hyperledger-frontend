import React, { Component } from 'react';
import axios from "axios";
class PayToll extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    payToll(){
        if(this.refs.Id.value !== ""){
            this.setState({loading: true})
            axios.post('http://68.183.187.28:3000/api/PayToll', {
                "$class": "org.bot.PayToll",
                "account": "resource:org.bot.WalletAccount#" + this.refs.Id.value,
                },{
                withCredentials: true
            }).then(res=>{
                alert("Bạn đã thanh toan !")
                this.setState({loading: false})
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
export default PayToll