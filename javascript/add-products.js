
class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description =  description;
    }
};

class UI {
    addProduct(product){
        const productLista = document.getElementById("items-table");
        const element = document.getElementById("table-items");
        element.innerHTML = `
                <th id="item1" scope="row">1</th>
                <td class="product-id">${product.id}</td>
                <td><img src="/assets/imagen4.jpg" alt="Producto 1"       class="img-thumbnail product-image" width="50"></td>
                <td class="product-name">${product.name}</td>
                <td class="product-description">${product.description}</td>
                <td class="product-price">${product.price}</td>
                <td class="product-quantity">10</td>
                <td>
                 <a href="#" class="btn btn-info btn-sm">Editar</a>
                 <a href="#" id="eliminarbtn" name="eliminar" class="btn btn-danger btn-sm">Eliminar</a>
               `
     ;
    productLista.appendChild(element);
    };

    deleteProduct(element){
        if(element.name === "eliminar"){
            element.parentElement.parentElement.remove();
            this.alertMessage(`Product Deleted`, `danger`)
        }

    };

    alertMessage(message, cssClass){
        const alertMessage = document.createElement("div");
        alertMessage.className = `alert alert-${cssClass}`;
        alertMessage.appendChild(document.createTextNode(message));
        /*alertMessage.style.background = "green";
        alertMessage.style.textAlign = "center";
        alertMessage.style.fontWeight = "500";
        alertMessage.style.color = "white";*/

        let container = document.querySelector(".container");
        let tableContent = document.querySelector(".table-striped");
        container.insertBefore(alertMessage, tableContent);
        setTimeout(function () {
            document.querySelector(".alert").remove();

        }, 2000);
    };

};

document.getElementById("modalAdd").addEventListener("submit", function(e) {
    const itemId = document.getElementById("itemId").value;
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemDescription = document.getElementById("itemDescription").value;


    const product = new Product(itemId, itemName, itemPrice, itemDescription);

    const ui = new UI();
    ui.addProduct(product);
    ui.alertMessage(`Product added`, `success`);
   
     
    console.log(product);
    e.preventDefault();
});

document.getElementById("items-table").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})
