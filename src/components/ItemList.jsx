import React from "react";
import Item from "./Item";


export default function ItemList({products}) {


  return (
        products.map(p => (
            <Item 
            key={p.id}
            name={p.name}
            image={p.image}
            edition={p.edition}
            price={p.price} />
        )
        )

  );
}