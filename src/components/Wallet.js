import React, { Component } from "react";
import axios from "axios";
import History from './History'
import "../css/wallet.css"
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            number : 1,
            info :[]
            

        };
    }
    componentWillMount(){
        axios.get(`
        http://68.183.187.28:3000/api/WalletAccount`, {
            withCredentials: true
          }).then((res) => {
            this.setState({info : res.data})
          })

    }
    render() {
        const { error } = this.state;
        if (error) {
            return <div>error</div>
        }
        else if (this.state.info.length === 0){
            return( <div>
                info
                </div>)
        }
        else
            return (
                
                <div className="container" style ={{"backgroundColor": "#eaeaea78"}}>
                    <div>
                        {/* <h5>Ví của bạn :</h5> */}
                    </div>
                    <div className=" row justify-content-center">
                        <div className="col-sm-10 ">
                            <div className="box_thongtin_sodu_ud">
                                <div className="text_tieude_all_ud">Thông tin số dư </div>
                                <hr style={{"width" :"20%"}}/>
                                <div className="box_all_tien_user_ud">
                                    Tổng số dư :
                        
                        <em>{this.state.info["accountBalance"]} VND</em>
                                </div>
                                <div className="box_all_tien_user_ud">
                                    Địa chỉ ví :
                        <em>{this.state.info["AccountNumber"]}</em>
                                </div>

                            </div>
                        </div>
                    </div>
                    <History />

                </div>
            )
    }
}
export default Wallet;