import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            pass: "",
            username : [],
            password : [],
            isLogin :false
        };

        this.formHandler = this.formHandler.bind(this);
        this.signin  = this.signin.bind(this);
        this.login  = this.login.bind(this);
    }
    
    
    formHandler(ev){
        this.setState({
            [ev.target.name]  : ev.target.value
            
        });
        console.log(this.state.username);
    }

    // passwordHandler(ev){
    //     let current = this.state.password;
    //     current.push(ev.target.value);
    //     this.setState({
    //         password : current,
            
    //     });
           
    // }

    signin(){
        //console.log(user);
        let currentUser = this.state.username;
        currentUser.push(this.state.user);

        let newpass = this.state.password;
        newpass.push(this.state.pass);
        
        this.setState({
            username : currentUser,
            password : newpass
            
        });

        this.setState({
            user : "",
            pass : ""
            
        });
        console.log(this.state.username);
        console.log(this.state.password);
        
    }

    
    login(){
        console.log(this.props);
        for(let i=0 ; i<=this.state.username.length; i++){
            if(this.state.username[i] === this.state.user){
                if(this.state.password[i] === this.state.pass){
                    this.props.history.push('/home');
                    //alert("LOGIN"); 
                }   
            }
            
        } 
               
    }

    render(){
        return(
            <div>
                <h1>Login Page </h1>
                Username :
                <input  type="text" name="user" value={this.state.user} onChange={this.formHandler}/>

                password :
                <input  type="text" name="pass" value={this.state.pass} onChange={this.formHandler}/>
                <br/>
                <button onClick={()=>{this.login()}}>Log In</button>
                <button onClick={this.signin}>Sign In</button>
                
            </div>
        );
    }
}  
export default Login;