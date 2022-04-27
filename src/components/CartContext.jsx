import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if(indexItem !== -1){
        const cartCopy = [...cart];
        cartCopy[indexItem].count = cartCopy[indexItem].count + item.count;
    }else{
    setCart([...cart, item]);
    console.log(cart)}
  }
  const removeItem = (id) => {setCart(cart.filter(item=>item.id !==id)); console.log(cart)}

  const clear=() => setCart([]);

  const buyAll = () => setCart([]);

  const cant = () => {
    return cart.reduce((total, item) => total + item.count*item.price, 0)
}

  const cantItems = () => {
      return cart.reduce((total, item) => total + item.count, 0)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, buyAll, cant, cantItems }}>
        {children}
      </CartContext.Provider> 
    </>
    )
}

export default CartContextProvider;