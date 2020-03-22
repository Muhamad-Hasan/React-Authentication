import React, { Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    incrementHandler()
    {   this.setState({
            counter : this.state.counter +1
        })
    }

    decrementHandler()
    {
        if(this.state.counter === 0)
        {
            alert("counter is at minimum position")
        }
        else{
            this.setState({
                counter : this.state.counter -1
            })
    
        }
        
        
    }
    render(){
        return(
            <div>
                <h1>My Counter App</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementHandler.bind(this)}>+</button>
                <button onClick={this.decrementHandler.bind(this)}>-</button>
            </div>
        )
    }
}
export default Counter;