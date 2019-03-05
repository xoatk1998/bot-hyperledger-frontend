import React, { Component } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
class PayIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberWallet:0,
            walletArray:null,
            licensePlate:0,
            selectValue:0,
            
        }
    }
    payIn(){
        if(this.refs.Amount.value !== ""
        && this.refs.Id.value !== ""){
            this.setState({loading: true})
            axios.post('http://68.183.187.28:3001/api/PayIn', {
                "$class": "org.bot.PayIn",
                "account": "resource:org.bot.WalletAccount#" + this.refs.Id.value,
                "ammount": this.refs.Amount.value,
            }).then(res=>{
                toast.success('🦄 Wow so easy!');
                alert("Ok");
                this.setState({loading: false})
            }).catch(e=>{
                console.log(e);
            })
            
        }
        else {
            alert("Bạn phải nhập đầy đủ thông tin!")

        }
    }
    componentDidMount() {
        toast.success("Wow so easy !");
        this.setState({loading:true})
        axios.get("http://68.183.187.28:3000/api/WalletAccount", {
            withCredentials: true
        }).then((res) => {
            this.setState({loading:false})
            
            this.setState({
                walletArray:res.data,
                licensePlate: res.data[this.state.numberWallet].licensePlate,
                numberWallet:res.data.length
            });
            console.log(this.state.numberWallet)
        
        })
    }
    renderWallet(){
        if(this.state.numberWallet===0) return <input type="text" className="form-control" id="licenseVihcle" placeholder="License Plate" />
        else{
            let option = this.state.walletArray.map((value,key)=>{
                return (<option value={value.licensePlate} key={key} style ={{"width":"80%"}}> {value.licensePlate}  </option>)
            })
            return( 
                    <select className="custom-select"  style={{"width":"100%"}} defaultValue={this.state.selectValue} ref ="Id"  >
                        {option}
                    </select>
                  
            )
        }
    }
    render() {
        return (
            <div className="container payin">
                <div className="titlePayin row">
                    <hr className="col-3 align-self-center" />
                    <p className="col-5"> Add Cash To Account</p>
                    <hr className="col-3 align-self-center" />
                </div>

                <div className="botName row">
                    <i className="fa fa-car fa-2x align-self-center"></i>
                    <h3 style={{ "marginLeft": "3%" }}>BOT Teneocto</h3>
                </div>

                <div className="bodyPayin">
                    <div className="form-group">
                        <h4 className="pb-3">Payment information</h4>
                        
                        {this.renderWallet()}
                        <input type="number" className="form-control" id="amount" placeholder="Amount" ref="Amount"/>
                    </div>

                    
                    <button className="btn charge" onClick={()=>this.payIn()}>SUBMIT</button>
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
export default PayIn