import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Main from './Main';
import Home from './Home';


function BasicExample() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        
      </div>
    </Router>
  );
}
export default BasicExample;