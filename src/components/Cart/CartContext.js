import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const contadorCarrito = productosAgregados.reduce(
    (acc, el) => acc + el.cantidad,
    0
  );
  return (
    <CartContext.Provider
      value={{ productosAgregados, setProductosAgregados, contadorCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};
