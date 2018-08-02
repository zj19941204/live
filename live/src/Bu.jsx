import React,{ Component }  from 'react';
// import App from "./App";


class Bu extends Component{
    constructor(props) {
        super(props);
        this.state = props
    }




    render() {
        return <button className="bu" onClick={this.state.onClick}>发送</button>
    }

}

module.exports =Bu;