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
        `;

        modalContainer.append(carritoContent);

        let eliminar = documet.createElement("button");
        eliminar.innerText = "X";
        eliminar.className = "delete-item";
        carritoContent.append(eliminar);

    });     

    const total = carrito.reduce((acc, el) => acc + el.price, 0);
 
    const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `Order total: ${total} $`;
        modalContainer.append(totalBuying);
}

verCarrito.addEventListener("click", pintarCart)

