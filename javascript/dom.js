let Inventario = [
    {
        img: "assets/imagen3.jpg",
        name: "Smartwatch Ctvrtek",
        price: "100.00$",
        descripcion: "",
    },
    {
        img: "assets/imagen4.jpg",
        name: "Smartwatch Dark Black",
        price: "150.00$",
        descripcion: "",
    },
    {
        img: "assets/imagen5.jpg",
        name: "Mini Smartwatch Black",
        price: "78.00$",
        descripcion: "",
    },
    {
        img: "assets/imagen6 (1).jpg",
        name: "Purple Smartwatch",
        price: "180.00$",
        descripcion: "",
    },
    {
        img: "assets/wallpaper5.jpg",
        name: "Classic IWC brown",
        price: "200.00$",
        descripcion: "",
    },
];

for (let i = 0; i < Inventario.length; i++) {
    let divPadre = document.createElement("div");
    let titulo = document.createElement("p");
    let price = document.createElement("p");
    let img = document.createElement("img");
    let descripcion = document.createElement("p");
    let button = document.createElement("button");

    button.innerHTML = "Add to cart";
    button.style.width = "70px";
    button.style.height = "50px";
    button.style.color = "white";
    button.style.background = "blue"

    titulo.innerHTML = Inventario[i].name;
    price.innerHTML = Inventario[i].price;
    img.src = Inventario[i].img;
    
    let verCarrito = document.getElementById("vercarrito");
    const modalContainer = document.getElementById("modal-container")

    let carrito = [];

    button.addEventListener("click", () =>{
        carrito.push({
            img: Inventario[i].img,
            name: Inventario[i].name,
            price: Inventario[i].price,
        });
    });

    verCarrito.addEventListener("click", () =>{
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
        <h2 class="modal-header-title">Shopping Cart.</h2>
        `;
        modalContainer.append(modalHeader);

        const modalButton = document.createElement("h2");
        modalButton.innerHTML = "x";
        modalButton.className = "modal-header-button";

        modalHeader.append(modalButton);
        
        carrito.forEach((items) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML = `
            <img src="${Inventario[i].img}">
            <h3>${Inventario[i].name}</h3>
            <p>${Inventario[i].price}</p>
            `;

            modalContainer.append(carritoContent);
        });

        const total = carrito.reduce((acc,el) => acc + el.price, 0);

        const totalOrder = document.createElement("div");
        totalOrder.className = "total-content";
        totalOrder.innerHTML = `Order total: ${total} $`;

        modalContainer.append(totalOrder);
    });

    divPadre.appendChild(titulo);
    divPadre.appendChild(img);
    divPadre.appendChild(price);
    divPadre.appendChild(button);
    divPadre.className = "card"

    document.getElementById("items").appendChild(divPadre)
}