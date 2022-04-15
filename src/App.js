import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />




        </Routes>

      
      
      
      </BrowserRouter>

    </>
  );
}

