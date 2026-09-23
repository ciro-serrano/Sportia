import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //funciones que modifican el carrito
  const addToCart = (item, cantidad) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((i) => i.id === item.id);
      if (cartItem) {
        return prevCart.map((i) => {
          if (i.id === item.id) {
            const updateItem = {
              ...item,
              cantidad: i.cantidad + cantidad,
            };
            return updateItem;
          } else {
            return i;
          }
        });
      } else {
        const newElement = { ...item, cantidad: cantidad };
        return [...prevCart, newElement];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
