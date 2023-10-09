const shopContent = document.getElementById("shopItems");
let verCarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

shopProducts.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card-item";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} $</p>
    `;

    shopContent.append(content);

    let addCart = document.createElement("button");
    addCart.innerText = "Add to Cart";
    addCart.className = "Add-cart";

    content.append(addCart);

    addCart.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img : product.img,
            name : product.name,
            price : product.price,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", ()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "inline-block"
    const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
        <h2 class="modal-header-title">Shopping Cart.</h2>
        `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
        `;

        modalContainer.append(carritoContent);
    });     

    const total = carrito.reduce((acc, el) => acc + el.price, 0);
 
    const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `Order total: ${total} $`;
        modalContainer.append(totalBuying);
});

