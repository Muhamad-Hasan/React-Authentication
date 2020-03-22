import React, { Component } from 'react';

class Clock extends Component
{   
    constructor(props){
        super(props);
        this.state = {          
            currentTime : new Date().toLocaleTimeString()
            
        }
        
    
    //this.updateTime = this.updateTime.bind(this);
       setInterval(this.updateTime(),1000               );     
    }
    
    updateTime(){
              this.setState = ({
                    currentTime : new Date().toLocaleTimeString()
                });
                
        
                
      //  console.log(this.state.currentTime) ;
        
    }
    render(){
        console.log(this.state.currentTime);

            return(
                            <h1>{this.state.currentTime}</h1>
        )
        
    }

}
export default Clock;