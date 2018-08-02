// import  {sendMessage } from './web.js';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import Live from './Live.jsx';
import Chat from './Chat.jsx';

// console.log(sendMessage())




ReactDOM.render(
    <div className="container">
        <Chat content="" value=""/>
        <Live />

    </div>
  ,
  document.getElementById('root')
);
