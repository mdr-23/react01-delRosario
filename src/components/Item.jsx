import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from "./ItemCount";


export default function Item({id, name, edition, price, image}) {


  return (
    <>
      <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Edición: {edition}
          </Card.Text>
          <Card.Text>
          $ {price}
          </Card.Text>
        </Card.Body>
        <ItemCount stock={8}/>
      </Card>
    </>
  );
}