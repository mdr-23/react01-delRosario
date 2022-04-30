import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import customCss from "./CSS/Fonts.module.css";

export default function CartDetail() {

  const {cart, removeItem, buyAll, valorTotal, totalItems} = useContext(CartContext);
  console.log(cart);
  //let valorTotal = cant();
  console.log(valorTotal);
  return (
    <>
    <div className="container mt-5">
      <h1 className= { customCss.brandTitle }>Carrito</h1>
      <ListGroup as="ol">
      <div> {cart.length > 0 ? cart.map(item => <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
            $ {item.price}
          </div>
          <Button className={ customCss.cardButton } onClick={() => removeItem(item.id)}>Eliminar del carrito</Button>
          <Badge bg="danger" pill>
            {item.counter}
          </Badge>
        </ListGroup.Item> ) : <div><Button 
        as={Link} to="/" variant="outline-danger">Volver a la tienda</Button> <br/> <h1>El carrito está vacío</h1></div> }</div>
      </ListGroup>
      { cart.length > 0 && <div>
        <h2>Total: $ {valorTotal}</h2>
        <hr/>
        <h2>Items en total: { totalItems }</h2>
        <Button className={ customCss.cardButton } onClick={() => buyAll()}>Finalizar mi compra</Button>
        <hr/>
        <Button className={ customCss.cardButton } onClick={() => buyAll()}>Vaciar carrito</Button>
      </div>}
    </div>
    </>
  )
}