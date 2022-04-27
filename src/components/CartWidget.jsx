import React, {useContext} from "react";
import {BsCart3} from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function CartWidget() {

  const {cantItems} = useContext(CartContext);
  let totalItems = cantItems();
  return(
      <>
          { totalItems > 0 && <Link to="/cart"> <BsCart3 /> {totalItems}</Link> }
      </>
  );
}