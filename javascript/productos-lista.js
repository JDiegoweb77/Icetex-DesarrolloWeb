const shopContent = document.getElementById("shopItems");
let verCarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");
const cartQuanty = document.getElementById("cartQuanty");

let carrito = [];

shopProducts.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card-item";
    content.innerHTML = `
        <img src="${product.img}">
        <h3 class="product-name">${product.name}</h3>
        <p class="price">${product.price} $</p>
    `;

    shopContent.append(content);

    let addCart = document.createElement("button");
    addCart.innerText = "Add to Cart";
    addCart.className = "Add-cart";

    content.append(addCart);
    addCart.addEventListener("click", () =>{
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat){
        carrito.map((prod) => {
        if(prod.id === product.id){
            prod.cantidad++;
        }
        });
    }else {
        carrito.push({
            id : product.id,
            img : product.img,
            name : product.name,
            price : product.price,
            cantidad : product.cantidad,
        });
    };
        console.log(carrito);
        carritoCounter();
    });
});

