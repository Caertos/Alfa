document.addEventListener("DOMContentLoaded", () => {
  let products = [];
  const productPlaceholder = document.querySelector(".productPlaceholder");

  function loadProducts() {
    fetch("./components/products.json")
      .then((response) => response.json())
      .then((jsonProducts) => {
        products = jsonProducts;
        renderProducts();
      });
  }

  function renderProducts() {
    productPlaceholder.innerHTML = "";
    products.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.className = "col-lg-3 col-sm-4 product-item text-center";
      productContainer.innerHTML = `
    
            <img class="product-img" src="${product.img}" alt="" />
            <div class="product-detail px-5 mb-5">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-price">$${product.price}</p>
              <button class="product-add px-2">Agregar</button>
            </div>
  `;
      productPlaceholder.appendChild(productContainer);
      console.log(productContainer);
    });
  }

  loadProducts();

});
