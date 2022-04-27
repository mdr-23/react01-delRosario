import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


export default function ItemCount({ stock, item }) {

    const [count, setCount] = useState(0);
    
    const{addItem} = useContext(CartContext);

    function add(){
        if (count < stock){
        setCount(count + 1);
        }  
    }

    function sub(){
        if (count > 0){
        setCount(count - 1);
        }
    }

/*     function onAdd(){
        if(count === 0){
            alert("No seleccionaste ningún ítem");
            console.log(count);
        }
        if(count === 1){
            alert("Agregaste " + count +  " ítem a tu carrito");
            console.log(count);
        }
        if(count > 1){
            alert("Agregaste " + count + " ítems a tu carrito");
            console.log(count);
        }
    } */

    function handleClick(){
        addItem({...item, cantidad : count})
    }



  return (
    <>
        <p className="mt-2 text-center">
            <button onClick={sub} className="mx-2">-</button>
            {count}
            <button onClick={add} className="mx-2">+</button>
        </p>

        <p className="text-center"><Link to={`/cart`}><button disabled={count < 1 ? true : false} onClick={handleClick}>Agregar al Carrito</button></Link></p>
    </>
  );
}