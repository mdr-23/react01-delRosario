import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({name, edition, price, image, year}) {


    return (
      <>
        <div className="d-flex mt-5 justify-content-center">
            <img src={image} alt={name} />
            <div>
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