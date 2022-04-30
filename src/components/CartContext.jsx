import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({children}){
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if(indexItem !== -1){
        const cartCopy = [...cart];
        cartCopy[indexItem].counter = cartCopy[indexItem].counter + item.counter;
    }else{
    setCart([...cart, item]);
    console.log(cart)}
  }
  const removeItem = (id) => {setCart(cart.filter(item=>item.id !==id)); console.log(cart)}

  //const clear=() => setCart([]);

  const buyAll = () => setCart([]);

  const cant = () => {
    return cart.reduce((total, item) => total + item.counter*item.price, 0)
}

  const cantItems = () => {
      return cart.reduce((total, item) => total += item.counter, 0)
  }

  let valorTotal = cant();
  let totalItems = cantItems();
  
  useEffect(() => {
      
  }, [])

  return(
      <CartContext.Provider value={{cart, addItem, removeItem, buyAll, valorTotal, totalItems, cantItems}}>
          {children}
      </CartContext.Provider>
  )
}

//xport default CartContextProvider;