import React from "react";
import Item from "./Item";


export default function ItemList({products}) {


  return (
        products.map(p => (
            <Item 
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            edition={p.edition}
            year={p.year}
            price={p.price}
            category={p.category} />
        )
        )

  );
}