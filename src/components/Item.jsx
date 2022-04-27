import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


export default function Item({id, name, edition, year, price, image}) {


  return (
    <>
      <Card className="mx-5" key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Edición: {edition}
          </Card.Text>
          <Card.Text>
          Año de publicación: {year}
          </Card.Text>
          <Card.Text>
          $ {price}
          </Card.Text>
        </Card.Body>
        <ItemCount stock={8}/>
        <Button as={Link} to={`/item/${id}`} variant="outline-info">Ver Detalle</Button>
      </Card>
    </>
  );
}