import React, {Component} from 'react'

class Error extends Component {
    render(){
        return(
            <div className = "container error">
                <img src={require("../img/no_search.png")}></img>
                <h2>404 Not Found !</h2>
            </div>

        )
    }
}
export default Error