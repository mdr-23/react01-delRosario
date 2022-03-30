import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemListContainer({nombre, apellido}) {

  return (
    <>
      <p class="text-center mt-5">Bienvenido, {nombre} {apellido}</p>
    </>
  );
}