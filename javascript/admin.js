let inventarioProducts = [
    {
        id: 1,
        img: "/assets/imagen3.jpg",
        name: "Smartwatch Ctvrtek",
        price: "100.00",
        descripcion: "",
        cantidad: 14,
    },
    {
        id: 2,
        img: "/assets/imagen4.jpg",
        name: "Smartwatch Dark Black",
        price: "150.00",
        descripcion: "",
        cantidad: 23,
    },
    {
        id: 3,
        img: "/assets/imagen5.jpg",
        name: "Mini Smartwatch Black",
        price: "78.00",
        descripcion: "",
        cantidad: 19,
    },
    {
        id: 4,
        img: "/assets/imagen6 (1).jpg",
        name: "Purple Smartwatch",
        price: "180.00",
        descripcion: "",
        cantidad: 43,
    },
    {
        id: 5,
        img: "/assets/wallpaper5.jpg",
        name: "Classic IWC brown",
        price: "200.00",
        descripcion: "",
        cantidad: 74,
    },
];

function invetarioItems(){
    let itemsCodigoHTML = "";
    for(let i = 0; i < shopProducts.length; i++){
     let itemsTable = `<tr class="product-information">
     <th id="item1" scope="row">1</th>
     <td class="product-id">${inventarioProducts[i].id}</td>
     <td><img src="${inventarioProducts[i].img}" alt="Producto 1"       class="img-thumbnail product-image" width="50"></td>
     <td class="product-name">${inventarioProducts[i].name}</td>
     <td class="product-description">${inventarioProducts[i].descripcion}</td>
     <td class="product-price">${inventarioProducts[i].price}</td>
     <td class="product-quantity">${inventarioProducts[i].cantidad}</td>
     <td>
      <a href="#" class="btn btn-info btn-sm">Editar</a>
      <a href="#" id="eliminar" class="btn btn-danger btn-sm">Eliminar</a>
    </td>
  </tr>`;

  itemsCodigoHTML += itemsTable;
    };
    document.getElementById("itemsTable").innerHTML=itemsCodigoHTML;
};
invetarioItems();
