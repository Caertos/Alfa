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
      const div = document.createElement("div");
      div.className = "tarjeta col-lg-2 col-md-4 col-sm-12 my-2";
      div.innerHTML = `
      <div class="containerProduct noselect">
        <div class="canvas">
          <div class="tracker tr-1"></div>
          <div class="tracker tr-2"></div>
          <div class="tracker tr-3"></div>
          <div class="tracker tr-4"></div>
          <div class="tracker tr-5"></div>
          <div class="tracker tr-6"></div>
          <div class="tracker tr-7"></div>
          <div class="tracker tr-8"></div>
          <div class="tracker tr-9"></div>
          <div id="card">
            <div class="card-content">
              <div class="card-glare"></div>
              <div class="cyber-lines">
                <span></span><span></span><span></span><span></span>
              </div>
                <a id="prompt" href="#">${product.name}</a>
              <div class="title d-flex justify-content-center">
                <img
                  src="${product.img}"
                  alt="${product.name}"
                  class="phoneImg"
                />
              </div>
              <div class="glowing-elements">
                <div class="glow-1"></div>
                <div class="glow-2"></div>
                <div class="glow-3"></div>
              </div>
              <div class="subtitle">
                <span>$</span><span class="highlight priceProduct">${product.price}</span>
              </div>
              <div class="card-particles">
                <span></span><span></span><span></span> <span></span
                ><span></span><span></span>
              </div>
              <div class="corner-elements">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="scan-line"></div>
            </div>
          </div>
        </div>
      </div>
`;
      data.appendChild(div);
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
  renderProducts();
});
