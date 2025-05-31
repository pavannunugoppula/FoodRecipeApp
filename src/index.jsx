import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Import this
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root')); // ✅ Create root
root.render(
  <BrowserRouter>
    <StrictMode>
    <App/>
  </StrictMode>
  </BrowserRouter>
  
);
