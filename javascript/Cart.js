const pintarCart = () => {

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
            <p>Quanty: ${product.cantidad}</p>
            <p>Summary: ${product.cantidad * product.price}</p>
        `;

        modalContainer.append(carritoContent);



        let eliminar = document.createElement("span");
        eliminar.innerText = "X";
        eliminar.className = "delete-item";
        carritoContent.append(eliminar);
        eliminar.style.cursor = "Pointer"

        eliminar.addEventListener("click", eliminarProducto);
    }); 

    const total = parseInt(carrito.reduce((acc, item) => acc + item.price*item.cantidad, 0));
    
    const totalBuying = document.createElement("button");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `Checkout: ${total} $`;
        modalContainer.append(totalBuying);
};
//let btnPay = document.createElement("button");
  //  btnPay.className = "checkout";
    //btnPay.innerHTML = `CHECKOUT`;



verCarrito.addEventListener("click", pintarCart)

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    pintarCart();
};

const carritoCounter = () => {
cartQuanty.style.display = "block";
cartQuanty .innerText = carrito.length;
};