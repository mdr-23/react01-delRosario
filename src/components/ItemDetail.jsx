import React from 'react';
import ItemCount from "./ItemCount";

export default function ItemDetail({id, name, edition, price, image, year}) {


  return (
    <>
      <div key={id} className="d-flex mt-5 justify-content-center">
          <img src={image} alt={name} />
          <div className="text-center mx-3">
              <h2>{name}</h2>
              <h3>${price}</h3>
              <h4>Edición: {edition}</h4>
              <h5>Año: {year}</h5>
              <ItemCount />
          </div>
      </div>
    </>
  );
}