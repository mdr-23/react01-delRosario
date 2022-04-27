import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function CartDetail() {

  const {cart, removeItem, buyAll, cant} = useContext(CartContext);
  console.log(cart);
  let valorTotal = cant();
  console.log(valorTotal);
  return (
    <>
      <h1>Carrito</h1>
      <ListGroup as="ol">
      <div> {cart.length > 0 ? cart.map(item => <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
            $ {item.price}
          </div>
          <Button variant="outline-secondary" onClick={() => removeItem(item.id)}>Eliminar del carrito</Button>
          <Badge bg="danger" pill>
            {item.count}
          </Badge>
        </ListGroup.Item> ) : <div><Button 
        as={Link} to="/" variant="outline-danger">Volver a la tienda</Button> <br/> <h1>El carrito está vacío</h1></div> }</div>
      </ListGroup>
      { cart.length > 0 && <div>
        <h2>Total: $ {valorTotal}</h2>
        <hr/>
        <Button variant="outline-success" onClick={() => buyAll()}>Finalizar mi compra</Button>
        <hr/>
        <Button variant="outline-secondary" onClick={() => buyAll()}>Vaciar carrito</Button>
      </div>}
    </>
  )
}