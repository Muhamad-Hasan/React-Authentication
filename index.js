import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

var add = document.getElementById('root');

ReactDOM.render(
    <div>
             <Routes />   
    </div>
    , add);

    


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
