import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//用于记录页面性能
import reportWebVitals from './reportWebVitals';

// React.StrictMode用于检测App组件中不合理的地方
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
