import "./ShoppingCart";
import "../components/cart.css"
import React, { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";


function CartProducts(product, cantidad, price) { 
  const [cart, setCart] = useContext(CartContext);

  const eliminarProducto = (id) => {
    const result = cart.filter((item) => item.id !== id);

    console.log(result)
    
  }
  
  return (
    <div id="cart-items">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
      <div style={{width: "3rem"}} ><img src={product.img} class="card-img-top" alt="..." /></div>
        <div class="fw-bold">{product.name}</div>
        {product.descripcion}
      </div>
      <span class="badge bg-primary rounded-pill">{product.cantidad}</span>
      <span class="badge bg-primary rounded-pill">{product.price} $</span>
      <a href="#" id="eliminarbtn" name="eliminar" className="btn btn-danger btn-sm" onClick={() => eliminarProducto(product)}>X</a>
    </li>
    </div>
  )
};
   
export default function ShoppingCart () {
  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.cantidad * curr.price,
    0
  );
    
  return (
    <div className="contenedor-cart col-4 mh-100" id="cart">
      <h2 className="cart-title d-flex justify-content-center">Shopping Cart 🛒  <span id="quantity">{cantidad}</span></h2>
      <ol class="list-group list-group-numbered" id="list">
        {
          cart.map((product)=> {
            return <CartProducts name={product.name} img={product.img} price={product.price} cantidad={product.cantidad}></CartProducts>
          })
        }
      </ol>
      <ol className="list-group list-group-numbered" class="contenedor-btn">
        <button type="button" class="btn btn-outline-dark">
          Total: {totalPrice} $
        </button>
        <button type="button" class="btn btn-success" /*onClick={Checkout}*/>
          Checkout
        </button>
      </ol>
    </div>
  );
};
/*function CartProducts(props) { 
  return (
    <div id="cart-items">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
      <div style={{width: "3rem"}} ><img src={props.img} class="card-img-top" alt="..." /></div>
        <div class="fw-bold">{props.name}</div>
        {props.descripcion}
      </div>
      <span class="badge bg-primary rounded-pill">{props.price}</span>
      <a href="#" id="eliminarbtn" name="eliminar" class="btn btn-danger btn-sm">X</a>
    </li>
    </div>
  )
};

export default function ShoppingCart(props) {
  let total = 0;
  
  function Checkout () {
    let sales = {
      products: props.selectedItems,
      total: total,
    }

    fetch("/check" ,{
      headers: {
        "content-type": "Aplication/json"
      },
      method: "POST",
      body: JSON.stringify(sales),
    });
  }
  return (
    <div className="contenedor-cart col-4 mh-100" id="cart">
      <h2 className="d-flex justify-content-center">Shopping Cart 🛒</h2>
      <ol class="list-group list-group-numbered" id="list">
      </ol>
      <div className="d-flex justify-content-evenly col-12 mt-4">
        <button type="button" class="btn btn-outline-dark">
          Total: {total}
        </button>
        <button type="button" class="btn btn-success" onClick={Checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}*/