import * as React from "react";
import * as ReactDOM from "react-dom";
import reportWebVitals from './utils/reportWebVitals';
import { App } from './components/App';
import './index.css';
import './sass/mystyles.scss';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { Footer } from './components/footer/Footer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
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