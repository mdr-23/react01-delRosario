import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({name, edition, price, image}) {


    return (
      <>
        <div>
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <h4>{edition}</h4>
                <ItemCount />
            </div>
        </div>
      </>
    );
  }