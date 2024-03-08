import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // "./App" == "./App.js"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
    {/*<App>은 내가 만든 태그, 반드시 끝에 /를 붙여서 종료해야함 */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
