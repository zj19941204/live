import React,{ Component }  from 'react';
// import App from "./App";
import In from "./In.jsx";
import ChatWindow from "./ChatWindow.jsx";
import Dm from "./Dm.jsx";

class Chat extends Component{

    constructor(props){
        super(props);
        this.state={content:"",value:"",datas:[],change:""};
        // alert(this.state.content)

    }

    change(a){
        // alert(1)
        this.setState({content: this.state.content+"\n"+'游客-'+a});
        this.setState({change:1})
        this.state.datas.push([a.split(":")[1],-200])

        // //this.setState({content: "Bob"});
        // // var that = this;
        // // console.log(that);
        // console.log(this.state.value);
    }


    componentDidUpdate(){
        //console.log(this.state);
        // console.log(this.state.value);
    }


    // componentWillReceiveProps(nextProps) {
    //     // const {data} = this.state
    //     this.setState({
    //         value: nextProps.value,
    //     })
    //     console.log(this.state.value);
    // }



    render() {
        return <div className="chat">
                    <Dm className="dm" change={this.state.change} datas={this.state.datas}/>
                    <ChatWindow content={this.state.content} />
                    <div className="sub" >
                      <In onClick={this.change.bind(this)}/>
                    </div>

        </div>
    }
}






module.exports =Chat;