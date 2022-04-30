import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
//import customFetch from "../utils/customFetch";
import { collection,getDocs,getFirestore } from 'firebase/firestore';



export default function ItemListContainer() {

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

/*   const { category } = useParams()

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
  }, [category]) */

  return (
    <>
      <div className="container-fluid d-flex mt-5 flex-nowwrap justify-content-center"><ItemList products={productos} /></div>
    </>
  );
}