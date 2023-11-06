import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ProductItem from "./Products";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function EShop() { 
  const [cart, setCart] = useState([]);
    return (
      <div className="container d-flex">
        <ShoppingCartProvider>
        <ProductItem setCart={setCart}></ProductItem>
        <ShoppingCart cart={cart}></ShoppingCart>
        </ShoppingCartProvider>
      </div>
    );
  }

