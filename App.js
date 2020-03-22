import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <p><a href={this.props.link}>{this.props.Text}</a></p>    
    )
  }
}
export default App;

