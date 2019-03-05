import React, { Component } from "react";
import axios from "axios";
import "../css/investor.css"
import DataTable from 'react-data-table-component';



const columns = [
    {
      name: 'Stt',
      selector: 'stt',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
        
      },
  ];


class Investor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            transaction: [],
            totalAmount :null,
        };
    }

    componentDidMount(){
        axios.get("http://68.183.187.28:3001/api/VehicleOwner",{
            withCredentials: true,
        }).then(res=>{
            let data = res.data;
            this.setState({user : data})
            // let users=[];
            // for (let i =0 ; i < data.length;i++){
            //     let obj={};
            //     obj["stt"] = i+1;
            //     obj["name"] = data[i].profile.name;
            //     obj["email"] = data[i].profile.email;
            //     users.push(obj);
            // }
            // this.setState({user : users})
            
        })
        // axios.get("http://68.183.187.28:3001/api/PayToll",{
        //     withCredentials: true,
        // }).then(res=>{
        //     let data = res.data;
        //     this.setState({transaction : data})
        //     console.log(this.state.transaction);
        // })
        axios.get("http://68.183.187.28:3001/api/system/historian",{
            withCredentials: true,
        }).then(res=>{
            let data = res.data;
            let trans= [];
            let amount=0;
            for (let i =0 ; i < data.length; i ++){
                if (data[i].transactionType ==="org.bot.PayToll"){
                    trans.push(data[i]);
                    amount += data[i].eventsEmitted[0].ammount;
                }
            }
            this.setState({transaction : trans,
            totalAmount : amount    
            })
        })

    }
    render() {
        if (true){
        // if (this.state.user.length > 0  ) {
            return (
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 table-result">
                        <div className="row">
                            <div className="">
                                <h3>List User : {this.state.user.length}</h3>

                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Stt</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.user.map((user,key)=>{
                                        return(<tr key={key}>
                                            <td>{key+1}</td>
                                            <td>{user.profile.name}</td>
                                            <td>{user.profile.email}</td>
                                        </tr>)
                                    })}
                                    
                                    
                                </tbody>
                            </table>
                            {/* <DataTable 
                                columns ={columns}
                                data ={this.state.user}
                                highlightOnHover
                                overflowY
                                paginationPerPage
                                // pagination
                                cell-border
                                
                            /> */}
                        </div>
                    </div>

                    <div className="col-sm-5 table-result">
                        <div className="row">
                            <div className="">
                                <h3>Total balance PayToll: {this.state.totalAmount} VND</h3>

                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Stt</th>
                                        <th>Wallet</th>
                                        <th>Balance</th>
                                        <th>datetime</th>
                                    </tr>
                                </thead>
                                <tbody style={{"height" :"410px","overflow" :"scroll"}}>
                                    {this.state.transaction.map((transaction,key)=>{
                                        let account = transaction.eventsEmitted[0].account;
                                        let id = account.slice(account.lastIndexOf("#")+1);
                                        return(
                                            
                                        <tr key= {key}>
                                        <td>{key+1}</td>
                                        <td>{id}</td>
                                        <td>{transaction.eventsEmitted[0].ammount} VND</td>
                                        <td>{transaction.transactionTimestamp}</td>

                                    </tr>

                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
        else {

        }
    }
}
export default Investor;