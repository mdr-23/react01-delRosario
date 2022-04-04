import React from "react";
import ItemCount from "./ItemCount";


export default function ItemListContainer() {

  //let arrayProductos = ["IT", "Cementerio de Animales"]

  return (
    <>
      <div class="text-center mt-5">
        <ItemCount stock={8}/>
      </div>
    </>
  );
}