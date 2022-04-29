import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import customCss from "./CSS/Fonts.module.css";
import { collection,getDocs,getFirestore } from 'firebase/firestore';


export default function Item() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
  const db = getFirestore();

  const productosRef = collection(db, 'products');

  getDocs(productosRef).then((res)=>{
    let productos = [...res.docs];

    productos = productos.map(item => ({ id: item.id, ...item.data() }));

    console.log(productos);

    setProductos(productos);
    
    //setProductos(res.docs.map((item)=>({ id: res.id, ...item.data() })));
  });
}, []);


  return (
    <>
      <Card className="" key={productos.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
          <Card.Title className={customCss.cardTitle}>{productos.name}</Card.Title>
          <Card.Text className={customCss.cardTitleText}>
          Edición: {productos.edition}
          </Card.Text>
          <Card.Text className={customCss.cardTitleText}>
          Año de publicación: {productos.year}
          </Card.Text>
          <Card.Text className={customCss.cardPrice}>
          $ {productos.price}
          </Card.Text>
          <Button className={customCss.cardButton} as={Link} to={`/item/${productos.id}`}>Ver Detalle</Button>
        </Card.Body>
        <ItemCount stock={8}/>
      </Card>
    </>
  );
}