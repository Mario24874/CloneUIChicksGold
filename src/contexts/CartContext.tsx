import React, { createContext, useState, useContext } from 'react';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += quantity;
        return newItems;
      } else {
        // Si el producto no está en el carrito, agrégalo con la cantidad especificada
        return [...prevItems, { id, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};