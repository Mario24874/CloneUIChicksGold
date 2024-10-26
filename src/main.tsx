import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/general.css'; 
import './styles/header.css'; 
import './styles/footer.css'; 
import './styles/products.css'; 
import './styles/filters.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);