import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductList from './components/products/ProductList';
import Footer from './components/Footer';
import { sampleProducts } from './data/products'; 
import './styles/general.css'; 
import './styles/header.css'; 
import './styles/footer.css'; 
import './styles/products.css'; 
import './styles/filters.css'; 
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        
        <main className="main">
          <h1 className="title">Condimentum consectetur</h1>
          
          <Filters />
          
          <ProductList products={sampleProducts} />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;