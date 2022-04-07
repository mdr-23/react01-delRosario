import React, { useState } from "react";


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
        }
        if(count === 1){
            alert("Agregaste " + count +  " ítem a tu carrito")
        }
        if(count > 1){
            alert("Agregaste " + count + " ítems a tu carrito")
        }
    }



  return (
    <>
        <p className="mt-2">
            <button onClick={sub} className="mx-2">-</button>
            {count}
            <button onClick={add} className="mx-2">+</button>
        </p>

        <p><button onClick={onAdd}>Agregar al Carrito</button></p>
    </>
  );
}