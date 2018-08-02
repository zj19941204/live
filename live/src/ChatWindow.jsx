import React,{ Component }  from 'react';
// import App from "./App";


class ChatWindow extends Component{
    constructor(props) {
        super(props);
        this.state = props
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        // const {data} = this.state
        this.setState({
            content: nextProps.content,
        })
    }





    // componentDidUpdate(){
    //     console.log(this.state);
    // }

    render() {
        return <div className="chatWindow">
            <pre className="pr">
                {this.state.content}
            </pre>
        </div>
    }

}

module.exports =ChatWindow;