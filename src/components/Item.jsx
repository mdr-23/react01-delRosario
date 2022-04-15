import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";


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
      </Card>
    </>
  );
}