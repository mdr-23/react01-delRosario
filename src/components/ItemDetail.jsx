import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from "./ItemCount";

export default function ItemDetail({ item, count, cantidad, setCantidad  }) {

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
      <div key={item.id} className="d-flex mt-5 justify-content-center">
          <img src={item.image} alt={item.name} />
          <div className="text-center mx-3">
              <h2>{item.name}</h2>
              <h3>${item.price}</h3>
              <h4>Edición: {item.edition}</h4>
              <h5>Año: {item.year}</h5>
              { cantidad===0 ? <ItemCount stock={8} addItem={addItem} item={item} count={count} setCantidad={setCantidad} /> : <Link to='/cart'>Ir al carrito - ({cantidad} items agregados)</Link> }
          </div>
      </div>
    </>
  );
}