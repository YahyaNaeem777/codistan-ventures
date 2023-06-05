import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartState from './context/cart/CartState';
import {BrowserRouter} from'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartState>
     <App />
    </CartState>
  </BrowserRouter>
);


reportWebVitals();
