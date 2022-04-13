import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


export default function App() {

  return (
    <>
      <NavBar />

      <ItemListContainer />

      <ItemDetailContainer />
    </>
  );
}

