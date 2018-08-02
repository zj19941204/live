// import  { sendMessage } from './web.js';
import React,{ Component }  from 'react';
// import App from "./App";
// import ""

class In extends Component{

    // constructor(props){
    //     super(props);s
    //     this.state=props
    // }

    // componentDidMount(){
    //     alert(this.state.content)
    //
    //
    //
    //
    //
    // }
    //

    // componentDidUpdate(){
    //     this.state=props
    // }

    constructor(props) {
        super(props);
        this.state = {value:'',content:''}
        this.change=this.props.onClick
        this.handleChange = this.handleChange.bind(this)
        this.sub= this.sub.bind(this);
        this.webSocket = new WebSocket("ws://192.168.2.210:9502");

        this.webSocket.onopen = function (event) {
        };

        this.webSocket.onmessage=(event=> {
            // alert(event.data)
            this.change(event.data)
            // this.setState({content: event.data});

            // var content = document.getElementById('content');
            // content.innerHTML = content.innerHTML.concat('<p >游客id-'+event.data+'</p>');
            // content.scrollTop = content.scrollHeight;
            // document.getElementById("message").value="";
        })


    }

    sendMessage(d) {
        this.webSocket.send(d)
        // alert(d)
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sub(event) {
        if (!this.state.value) {
            alert('请输入内容');
            return false
        }
        // alert(1)
        this.sendMessage(this.state.value)
        this.setState({value: ''});
    }

    componentDidUpdate(){
        console.log(this.state);
        // console.log(this.state.value);
    }


    render() {
        return <div>
                <input className="in" onChange={this.handleChange} value={this.state.value}></input>
                <button className="bu" onClick={this.sub}>发送</button>
                </div>
    }

}

module.exports =In;