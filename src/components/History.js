import React, { Component } from 'react'
import "../css/wallet.css"
class History extends Component {
    render() {
        return (
            <div className=" row justify-content-center">
                <div className="col-sm-10 ">
                    <div className="box_thongtin_sodu_ud">
                        <div className="text_tieude_all_ud" >Lịch sử giao dịch </div>

                        <hr style={{ "width": "20%" }} />
                        {/* <table className="table" style={{"marginTop" :"20px"}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Stt</th>
                                            <th scope="col">BOT</th>
                                            <th scope="col">Số tiền</th>
                                            <th scope="col">Thời gian</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table> */}
                        <div style={{ "marginLeft": "30%" }}>
                            <img src={require("../img/no_history.png")} />
                            <p style={{ "marginLeft": "-5%","marginTop":"1%" }}>Bạn chưa có lịch sử giao dịch</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
export default History