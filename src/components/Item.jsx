import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import customCss from "./CSS/Fonts.module.css";


export default function Item({id,name,image,edition,year,price}) {

  


  return (
    <>
    <div className="mx-3">
      <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className={customCss.cardTitle}>{name}</Card.Title>
          <Card.Text className={customCss.cardTitleText}>
          Edición: {edition}
          </Card.Text>
          <Card.Text className={customCss.cardTitleText}>
          Año de publicación: {year}
          </Card.Text>
          <Card.Text className={customCss.cardPrice}>
          $ {price}
          </Card.Text>
          <Button className={customCss.cardButton} as={Link} to={`/item/${id}`}>Ver Detalle</Button>
        </Card.Body>
        <ItemCount stock={8}/>
      </Card>
    </div>
    </>
  );
}