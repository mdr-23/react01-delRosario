import React from "react";
import { useEffect, useState } from "react";
import promises from "../utils/promises";
import products from "../utils/products";
import ItemList from "./ItemList";


export default function ItemListContainer() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    promises(3000, products)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error));
  }, [items])

  return (
    <>
      <div className="text-center mt-5 d-flex justify-content-center">
        <ItemList products={items} />
      </div>
    </>
  );
}