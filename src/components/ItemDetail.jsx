import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {

/*   const add = () => {
    console.log("nro")
  } 
*/

const [number, setNumber] = useState(0);

function onAdd(count){
  setNumber(count);
}

  return (
    <>
      <div key={item.id} className="d-flex mt-5 justify-content-center">
          <img src={item.image} alt={item.name} />
          <div className="text-center mx-3">
              <h2>{item.name}</h2>
              <h3>${item.price}</h3>
              <h4>Edición: {item.edition}</h4>
              <h5>Año: {item.year}</h5>
              { number===0 ? <ItemCount stock={8} onAdd={onAdd} item={item} /> : <Link to='/cart'>Ir al carrito</Link> }
          </div>
      </div>
    </>
  );
}