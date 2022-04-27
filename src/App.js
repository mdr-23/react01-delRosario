import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import CartDetail from "./components/CartDetail";


export default function App() {

  return (
    <>

      <BrowserRouter>
        <CartContextProvider>
          <NavBar />

          <Routes>

            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartDetail />} />

          </Routes>
      
        </CartContextProvider>
      </BrowserRouter>

    </>
  );
}

