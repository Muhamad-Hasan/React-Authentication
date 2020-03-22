import React, { Component } from 'react';

class Home extends Component{
    back(){
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>Password</td>
                        
                    </tr>
                    
                </table>

                <button onClick={this.back}>Back</button>
            </div>
        );
    }

}
export default Home;