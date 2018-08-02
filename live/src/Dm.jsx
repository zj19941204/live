import React,{ Component }  from 'react';
// import App from "./App";
// import ""

class Dm extends Component{

    constructor(props){
        super(props)
        this.state=props
        // this.state={datas:[[11,200]],change:""}

    }


    componentDidMount(){
        // alert(1)
        setInterval(()=>{
            // alert(5)
            this.state.datas.map((data)=>{
                this.setState({change:1})

                if (data[1]<-1000) {
                    data = []
                } else {
                    data[1]-=20;
                }
                console.log(data)
            })
        },300)
    }


    render() {
        return (
                this.state.datas.map(function (data) {
                    if (data[1]>-1000){
                        console.log(data)
                        return(
                            <li className="dm" style={{marginLeft:data[1]+'px'}}>{data[0]}</li>
                        )
                    }

                })
        )

    }




}

module.exports =Dm;