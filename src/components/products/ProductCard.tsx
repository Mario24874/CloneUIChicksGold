import React, { useState } from 'react';
import { Product } from '../types';
import '../../styles/products.css';  
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setQuantity(1); 
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (    
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={`/assets/products/${product.image}`} 
          alt={product.name}
          className="product-image"
        />
        {product.onSale && (
          <span className="sale-badge">
            ON SALE
          </span>
        )}        
      </div>
      <span className="in-stock">In Stock</span>
      <div className="count-actions">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
            className="count-input"
          />  
      </div>       
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          <span className="sale-price">${product.salePrice}</span>
          <span className="original-price">${product.originalPrice}</span>          
        </div>
        <p className="product-description">Lorem ipsum dolor sit amet consetetur sadipscing elitr.</p>
        <div className="product-actions">
          <button className="details-button">DETAILS</button>
          <button className="add-button" onClick={handleAddToCart}>
            ADD
            <img src="/assets/grocery-store.png" alt="Cart Icon" className="cart-icon" />
          </button>
        </div>
      </div>
    </div>    
  );
};

export default ProductCard;