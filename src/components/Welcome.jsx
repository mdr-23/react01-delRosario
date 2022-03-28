import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Welcome({nombre, apellido}) {

  return (
    <>
      <p>Bienvenido, {nombre} {apellido}</p>
    </>
  );
}