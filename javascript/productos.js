let shopProducts = [
    {
        id: 1,
        img: "/assets/imagen3.jpg",
        name: "Smartwatch Ctvrtek",
        price: "100.00",
        descripcion: "",
        cantidad: 1,
    },
    {
        id: 2,
        img: "/assets/imagen4.jpg",
        name: "Smartwatch Dark Black",
        price: "150.00",
        descripcion: "",
        cantidad: 1,
    },
    {
        id: 3,
        img: "/assets/imagen5.jpg",
        name: "Mini Smartwatch Black",
        price: "78.00",
        descripcion: "",
        cantidad: 1,
    },
    {
        id: 4,
        img: "/assets/imagen6 (1).jpg",
        name: "Purple Smartwatch",
        price: "180.00",
        descripcion: "",
        cantidad: 1,
    },
    {
        id: 5,
        img: "/assets/wallpaper5.jpg",
        name: "Classic IWC brown",
        price: "200.00",
        descripcion: "",
        cantidad: 1,
    },
];

const productActions = {
    increase: (id, quantity = 1) => {
        products.find((product) => product.id === id).quantity += quantity;
    },
    decrease: (id, quantity = 1) => {
        if (products.find((product) => product.id === id).quantity === 0) return true;
        console.log(products.find((product) => product.id === id).quantity)
        products.find((product) => product.id === id).quantity -= quantity;
        return false;
    },
}
