import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Link } from './Navigation';
import '../styles/header.css';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <img src="/assets/ChicksGold.png" alt="Chicks Gold" className="logo-image" />
            <nav className="nav">
              <select className="nav-select">
                <option>CURRENCY</option>
              </select>
              <select className="nav-select">
                <option>ITEMS</option>
              </select>
              <select className="nav-select">
                <option>ACCOUNTS</option>
              </select>
              <select className="nav-select">
                <option>SERVICES</option>
              </select>
              <select className="nav-select">
                <option>SWAP</option>
              </select>
              <select className="nav-select">
                <option>SELL</option>
              </select>
            </nav>
          </div>
          
          <div className="header-right">
            <select className="currency-select">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
            <div className="cart">
            <ShoppingCart className="cart-icon" />
            <span className="cart-count">CART {cartCount}</span>
          </div>
            <button className="signin-button">SIGN IN
              <img src="/assets/user.png" alt="User Icon" className="signin-icon" />              
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;