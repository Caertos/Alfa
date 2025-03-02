document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Samsung Galaxy S21",
      category: "celulares",
      price: 1085000,
      img: "images/SamsungS21.png",
    },
    {
      name: "Redmi Note 13S",
      category: "celulares",
      price: 1200000,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 3",
      category: "cargadores",
      price: 30,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 4",
      category: "cargadores",
      price: 30,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 5",
      category: "cargadores",
      price: 30,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 6",
      category: "cargadores",
      price: 30,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 7",
      category: "accesorios",
      price: 40,
      img: "images/redmi13pro.jpg",
    },
    {
      name: "Producto 8",
      category: "accesorios",
      price: 40,
      img: "images/redmi13pro.jpg",
    },
  ];

  const templateProduct = document.querySelector("#product-template");
  const data = document.querySelector(".productData");
  const pagination = document.querySelector("#pagination");
  const itemsPerPage = 6;
  let currentPage = 1;

  function renderProducts() {
    data.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = products.slice(start, end);

    paginatedItems.forEach((product) => {
      const productTemplateClone = templateProduct.content.cloneNode(true);
      productTemplateClone.querySelector("#prompt").textContent = product.name;
      productTemplateClone.querySelector("#prompt").href = "#";
      productTemplateClone.querySelector(".priceProduct").textContent =
        product.price;
      productTemplateClone.querySelector(".phoneImg").src = product.img;
      productTemplateClone.querySelector(".phoneImg").alt = product.name;
      data.appendChild(productTemplateClone);
    });

    renderPagination();
  }

  function renderPagination() {
    if (!pagination) {
      console.error("No se encontró el div#pagination");
      return;
    }

    pagination.innerHTML = "";
    const totalPages = Math.ceil(products.length / itemsPerPage);

    if (totalPages <= 1) return;

    const createPageButton = (text, page) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add("page-button", "btn", "btn-primary", "mx-1");
      if (page === currentPage) button.classList.add("active");
      button.addEventListener("click", () => {
        currentPage = page;
        renderProducts();
      });
      return button;
    };

    if (currentPage > 1) {
      pagination.appendChild(createPageButton("<", currentPage - 1));
    }

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.appendChild(createPageButton(i, i));
      }
    } else {
      pagination.appendChild(createPageButton(1, 1));

      if (currentPage > 3) {
        pagination.appendChild(document.createTextNode(" ... "));
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pagination.appendChild(createPageButton(i, i));
      }

      if (currentPage < totalPages - 2) {
        pagination.appendChild(document.createTextNode(" ... "));
      }

      pagination.appendChild(createPageButton(totalPages, totalPages));
    }

    if (currentPage < totalPages) {
      pagination.appendChild(createPageButton(">", currentPage + 1));
    }
  }
  console.log("Elemento pagination:", pagination);
  renderProducts();
  console.log("Botones de paginación generados: ", pagination.innerHTML);
});