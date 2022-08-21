import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';
import { App } from './components/App';
import './index.css';
import './css/mystyles.css';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
