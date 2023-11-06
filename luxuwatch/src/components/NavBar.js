import "../components/Nav.css"
import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

function NavBar() {
    /*const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, current) => {
        return acc + current.quantity;
    },0);*/

    return (
        <nav class="nav">
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <i class="bi bi-list"></i>
            </label>
            <div id="logo">
                <h1>LuxuWatch</h1>
            </div>
            <div class="search-label">
                <input type="search" placeholder="What are you looking for?" />
                <input type="submit" value="Search"/>
            </div>
                    
               <ul class="nav__ul">
               <li class="nav__li"><a href="#">Home</a></li>
                <li class="nav__li"><a href="#">Shop</a>
                    <ul class="nav__ul menu-vertical">
                        <li class="nav__li"><a href="#">Classic Watches</a></li>
                        <li class="nav__li"><a href="#">Digital Watches</a></li>
                        <li class="nav__li"><a href="#">Accesories</a></li>
                    </ul>
                </li>
                <li class="nav__li"><a href="#">My Account<i class="bi bi-person"></i></a>
                    <ul class="nav__ul menu-vertical">
                        <li class="nav__li"><a href="#">Order Status</a></li>
                        <li class="nav__li"><a href="#">Edit profile</a></li>
                        <li class="nav__li"><a href="#">Log Out</a></li>
                    </ul>
                </li>
                <li class="nav__li"><a href="#">Help center</a></li>
            </ul>

        <ul class="nav__responsive-ul">
            <li class="nav__li"><a href="#">Shop</a>
                <ul class="nav__ul menu-vertical">
                    <li class="nav__responsive-li"><a href="#">Classic Watches</a></li>
                    <li class="nav__responsive-li"><a href="#">Digital Watches</a></li>
                    <li class="nav__responsive-li"><a href="#">Accesories</a></li>
                </ul>
            </li>
            <li class="nav__li"><a href="#">My Account<i class="bi bi-person"></i></a>
                <ul class="nav__ul menu-vertical">
                    <li class="nav__responsive-li"><a href="#">Order Status</a></li>
                    <li class="nav__responsive-li"><a href="#">Edit profile</a></li>
                    <li class="nav__responsive-li"><a href="#">Log Out</a></li>
                </ul>
            </li>
            <li class="nav__li"><a href="#">Help center</a></li>
        </ul>
    </nav>
    );
};
export default NavBar;