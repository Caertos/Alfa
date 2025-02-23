document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Samsung Galaxy S21", category: "celulares", price: 2200000, img: "images/SamsungS21.png", },
    { name: "Redmi Note 13S", category: "accesorios", price: 1200000, img: "images/redmi13pro.jpg" },
    { name: "Producto 3", category: "cargadores", price: 30 },
    { name: "Producto 4", category: "cargadores", price: 30 },
    { name: "Producto 5", category: "cargadores", price: 30 },
    { name: "Producto 6", category: "cargadores", price: 30 },
  ];

  const templateProduct = document.querySelector("#product-template");
  const data = document.querySelector(".productData");

  products.forEach((product) => {

    const productTemplateClone = templateProduct.content.cloneNode(true);
    productTemplateClone.querySelector("#prompt").textContent = product.name;
    productTemplateClone.querySelector(".priceProduct").textContent = product.price;
    productTemplateClone.querySelector(".phoneImg").src = product.img;
    productTemplateClone.querySelector(".phoneImg").alt = product.name;
    data.appendChild(productTemplateClone);

    console.log(data);
  });
});
