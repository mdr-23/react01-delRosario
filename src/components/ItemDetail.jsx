import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import customCss from "./CSS/Fonts.module.css";

export default function ItemDetail({ producto, count, cantidad, setCantidad  }) {

/*   const add = () => {
    console.log("nro")
  } 
*/

const {addItem} = useContext(CartContext);

/* const [number, setNumber] = useState(0);

function addItem(count){
  setNumber(count);
} */

  return (
    <>
      <div key={producto.id} className="d-flex mt-5 justify-content-center">
          <img src={producto.image} alt={producto.name} />
          <div className="text-center mx-3">
              <h2>{producto.name}</h2>
              <h3>${producto.price}</h3>
              <h4>Edición: {producto.edition}</h4>
              <h5>Año: {producto.year}</h5>
              { cantidad===0 ? <ItemCount stock={8} addItem={addItem} producto={producto} count={count} setCantidad={setCantidad} /> : <Button className={customCss.cardButton}><Link to='/cart'>Ir al carrito - ({cantidad} items agregados)</Link></Button> }
          </div>
      </div>
    </>
  );
}