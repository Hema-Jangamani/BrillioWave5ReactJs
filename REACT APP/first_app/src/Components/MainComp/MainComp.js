import React from "react";

class MainComp extends React.Component{

    constructor(props){
        super(props);
        this.ChangeState=this.ChangeState.bind(this);
    }
    state={
        name:'Hema'
    }
    ChangeState(){
        this.setState({name:'Peter'});
    }
    render(){
        return(
        <div>
            <h2>Welcome {this.state.name}</h2>
            <button onClick={this.ChangeState}>Change name</button>
        </div>
        )
    }
}
export default MainComp;