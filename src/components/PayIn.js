import React, { Component } from 'react';
class PayIn extends Component {
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
                        <input type="text" className="form-control" id="licenseVihcle" placeholder="Biển số xe" />
                        <input type="number" className="form-control" id="amount" placeholder="Số tiền nạp" />
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
                    <button className="btn charge">NẠP TIỀN</button>
                </div>

                
            </div>
        )
    }
}
export default PayIn