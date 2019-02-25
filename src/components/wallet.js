import React, { Component } from "react";
import "../css/wallet.css"
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,

        };
    }
    render() {
        const { error } = this.state;
        if (error) {
            return <div>error</div>
        }
        else
            return (
                <div className="container">
                    <div>
                        {/* <h5>Ví của bạn :</h5> */}
                    </div>
                    <div className=" row justify-content-center">
                        <div className="col-sm-8 ">
                            <div className="box_thongtin_sodu_ud">
                                <div className="text_tieude_all_ud">Thông tin số dư </div>
                                <div className="box_all_tien_user_ud">
                                    Tổng số dư :
                        <em>0 VND</em>
                                </div>
                                <div className="box_all_tien_user_ud">
                                    Địa chỉ ví :
                        <em>123434343</em>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" row justify-content-center">
                        <div className="col-sm-8 ">
                            <div className="box_thongtin_sodu_ud">
                                <div className="text_tieude_all_ud">Lịch sử giao dịch </div>
                                <table class="table">
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
                                </table>


                            </div>
                        </div>
                    </div>

                </div>
            )
    }
}
export default Wallet;