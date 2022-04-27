import React from "react";
import Item from "./Item";


export default function ItemList({products}) {


  return (
        products.map(item => (
            <Item 
            key={item.id}
            name={item.name}
            image={item.image}
            edition={item.edition}
            year={item.year}
            price={item.price}
            category={item.category} />
        )
        )

  );
}