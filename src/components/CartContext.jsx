import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, {item}]);
    console.log(cart);
  }
  const removeItem = (id) => setCart(cart.filter(item=>item.id !==id));
  const clear=() => setCart([]);
  const inCart = (id) => true;
  const buyAll = () => setCart([])

  return (
    <>
      <CartContextProvider value={{ cart, addItem, removeItem, clear, inCart, buyAll }}>
        {children}
      </CartContextProvider> 
    </>
    )
}

export default CartContextProvider;