import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";


export default function ItemListContainer() {

  const [products, setProducts] = useState([]);

  const { category } = useParams()

  useEffect (() => {
    customFetch(500)
    .then(resultado => {
      if(category){
        setProducts(resultado.filter(i => i.category === category))
      }else{
        setProducts(resultado)
      }
    })
    .catch(error => console.log(error));
  }, [category])

  return (
    <>
      <div className="d-flex mt-5 justify-content-center mx-5"><ItemList products={products} /></div>
    </>
  );
}