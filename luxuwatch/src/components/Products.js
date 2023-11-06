import "../components/products.css"
import React, { useState,useContext } from "react";
import Products from "../data/products.json"
import { CartContext } from "../context/ShoppingCartContext";

function ProductItem ({ id, name, img, descripcion, price, cantidad }) {
  const [cart, setCart] = useContext(CartContext);

  function AddToCart() {
      setCart((currentItems) => {
      const itemsFound = currentItems.find((item) => item.id === id)
      if(itemsFound){
        return currentItems.map((item) => {
          if(item.id === id){
            return {...item,cantidad: item.cantidad +1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, {id, cantidad: 1, name, img, price}]
      }
    });

  const deleteItem = (id) => {
    setCart((currentItems) => {
      if(currentItems.find((item) => item.id === id)?.cantidad === 1){
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if(item.id === id){
            return {...item, cantidad: item.cantidad - 1};
          } else {
            return item;
          }
        });
      }
    });
  }
}
return (
  <div className="card d-flex">
  <img src={img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text"></p> 
  <div className="botn-block">
    <button class="btn btn-outline-dark">{price}$</button>
    <button type="button" class="btn btn-success" onClick={() => AddToCart()}>
      Add to Cart
    </button>
     </div>
    </div>  
  </div>
);
}

export default function ProductList() {
return (
  <div className="contenedor-products col-8" style={{ background: "darkslategray"}}>
    <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
    {Products.map((product) => {
      return (
        <ProductItem //key={product.id} {...product}
        id={product.id}
        img={product.img}
        name={product.name}
        descripcion={product.descripcion}
        price={product.price}
        cantidad={product.cantidad}
        ></ProductItem>
      );
    })}
    </div>
)
};


