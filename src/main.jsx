import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'

import { CartProvider } from './contextCart/cartContextApi.jsx';

import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
      <CartProvider>
        
        <App />
      
      </CartProvider>
      
    </Provider>
    
  </StrictMode>,
)
