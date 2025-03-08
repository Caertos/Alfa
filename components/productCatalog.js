document.addEventListener("DOMContentLoaded", () => {
  let products = [];
  const productPlaceholder = document.querySelector(".productPlaceholder");
  const filterButtons = document.querySelectorAll(".category-btn");

  let categoryFilter = "";
  const currentPage = window.location.pathname;

  if (currentPage.includes("phones.html")) {
    categoryFilter = "celulares";
  } else if (currentPage.includes("accessories.html")) {
    categoryFilter = "accesorios";
  } else {
    console.error("Página no reconocida, no se filtrarán productos.");
    return;
  }

  async function loadProducts() {
    try {
      const response = await fetch("./components/products.json");
      if (!response.ok) throw new Error("Error al cargar los productos");

      const allProducts = await response.json();
      products = allProducts.filter(
        (product) => product.category === categoryFilter
      );
      renderProducts(products);
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  }

  function renderProducts(productList) {
    productPlaceholder.innerHTML = "";
    productList.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.className = "col-lg-3 col-sm-4 product-item text-center";
      productContainer.innerHTML = `
        <img class="product-img" src="${product.img}" alt="${product.name}" />
        <div class="product-detail px-5 mb-5">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">$${product.price}</p>
          <button class="product-add px-2" data-id="${product.name}">Agregar</button>
        </div>
      `;
      productPlaceholder.appendChild(productContainer);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.parentElement.classList.remove("p-active");
      });
      button.parentElement.classList.add("p-active");

      let filterValue = button.textContent.trim();
      let filteredProducts = [];

      if (currentPage.includes("phones.html")) {
        if (filterValue === "Todas las marcas") {
          filteredProducts = products;
        } else {
          filteredProducts = products.filter(
            (product) => product.brand === filterValue
          );
        }
      } else if (currentPage.includes("accessories.html")) {
        if (filterValue === "Todas las categorías") {
          filteredProducts = products;
        } else {
          const mapping = {
            Cargadores: "cargador",
            Protección: "protector",
            Sonido: "audifonos",
            SmartWatch: "smartwatch",
            Juegos: "juegos",
            Carro: "carro",
            Otros: "otros"
          };
          let filterType =
            mapping[filterValue] || filterValue.toLocaleLowerCase();
          filteredProducts = products.filter(
            (product) => product.type === filterType
          );
        }
      }
      document.getElementById("text-selected-catalog").textContent =
        filterValue;
      renderProducts(filteredProducts);
    });
  });

  productPlaceholder.addEventListener("click", (event) => {
    if (event.target.classList.contains("product-add")) {
      const productId = event.target.getAttribute("data-id");
      console.log(`Producto agregado: ${productId}`);
    }
  });

  loadProducts();
});
