import React, { Component } from 'react';
class PayIn extends Component {
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
                        <input type="text" className="form-control" id="licenseVihcle" value="89E1-42493" readOnly/>
                        <label >Trạm thu phí :</label>
                        <input type="text" className="form-control" id="licenseVihcle" value="Trạm thu phí số 02" readOnly/>
                        <label >Số tiền :</label>
                        <input type="number" className="form-control" id="licenseVihcle" value="100000" readOnly/>
                        <label >Thời gian giao dịch</label>
                        <input type="time" className="form-control" id="licenseVihcle" value="04:05:06" readOnly/>
                    </div>

                    {/* <ul class="fastCharge" class="listMoney">
                    <li>
                        <a data-value="100000">100000fdg</a>
                    </li>
                    <li>
                        <a data-value="200000">200000</a>
                    </li>
                    <li>
                        <a data-value="300000">500000</a>
                    </li>
                    </ul> */}
                    <button className="btn charge">Thanh toán</button>
                </div>

                
            </div>
        )
    }
}
export default PayIn