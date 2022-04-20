import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function ItemCount({ stock }) {

    const [count, setCount] = useState(0);

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

    function onAdd(){
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
    }



  return (
    <>
        <p className="mt-2 text-center">
            <button onClick={sub} className="mx-2">-</button>
            {count}
            <button onClick={add} className="mx-2">+</button>
        </p>

        <p className="text-center"><Link to={`/cart`}><button disabled={count < 1 ? true : false} onClick={onAdd}>Agregar al Carrito</button></Link></p>
    </>
  );
}