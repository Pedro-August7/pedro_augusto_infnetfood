import  { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product, quantity) {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function removeItem(id) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
