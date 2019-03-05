import React, { Component } from 'react'
import "../css/wallet.css"
import axios from 'axios';
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: [],
            haveTransaction: null,
        };
    }
    componentDidMount() {
        console.log(this.props.licensePlate);
        axios.get("http://68.183.187.28:3000/api/system/historian", {
            withCredentials: true,
        }).then(res => {
            let data = res.data;
            let trans = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].transactionType === "org.bot.PayToll" || data[i].transactionType === "org.bot.PayIn") {
                    let account = data[i].eventsEmitted[0].account;
                    let id = account.slice(account.lastIndexOf("#") + 1);
                    if (id === this.props.licensePlate) {
                        trans.push(data[i])
                    }

                }
            }
            this.setState({
                transaction: trans,
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props.licensePlate);
        axios.get("http://68.183.187.28:3000/api/system/historian", {
            withCredentials: true,
        }).then(res => {
            let data = res.data;
            let trans = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].transactionType === "org.bot.PayToll" || data[i].transactionType === "org.bot.PayIn") {
                    let account = data[i].eventsEmitted[0].account;
                    let id = account.slice(account.lastIndexOf("#") + 1);
                    if (id === this.props.licensePlate) {
                        trans.push(data[i])
                    }

                }
            }
            this.setState({
                transaction: trans,
            })
        })
    }
    render() {
        if (this.state.transaction.length === 0) {
            return (
                <div className=" row justify-content-center">
                    <div className="col-sm-10 ">
                        <div className="box_thongtin_sodu_ud">
                            <div className="text_tieude_all_ud" >History Transaction </div>

                            <hr style={{ "width": "20%" }} />
                            <div style={{ "marginLeft": "30%" }}>

                                <img src={require("../img/no_history.png")} />
                                <p style={{ "marginLeft": "5%", "marginTop": "1%" }}>No transaction found</p>
                            </div>


                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className=" row justify-content-center">
                    <div className="col-sm-10 ">
                        <div className="box_thongtin_sodu_ud">
                            <div className="text_tieude_all_ud" >History Transaction </div>

                            <hr style={{ "width": "20%" }} />
                            
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                            <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ "height": "410px", "overflow": "scroll" }}>
                                        {this.state.transaction.map((transaction, key) => {
                                            let type = transaction.transactionType.split(".");
                                            
                                            return (

                                                <tr key={key}>
                                                    <td>{key + 1}</td>
                                                    <td>{transaction.eventsEmitted[0].ammount} VND</td>
                                                    <td>{type[2]}</td>
                                                    <td>{transaction.transactionTimestamp}</td>

                                                </tr>

                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            )

        }
    }
}
export default History