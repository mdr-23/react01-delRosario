import React from "react";
import { useEffect, useState } from "react";
import { traerProductos } from "../utils/products";
import ItemList from "./ItemList";


export default function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerProductos()
    .then((res) => setProducts(res))
    .catch((error) => console.log(error))
    .finally(() => {
        setLoading(false);
    });
}, []);

  return (
    <>
            {loading ? (
                <h1>Cargando productos. Por favor, espere.</h1>
            ) : (
                <div className="d-flex mt-5 justify-content-center"><ItemList products={products} /></div>
            )}
    </>
  );
}