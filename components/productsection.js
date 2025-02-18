document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "Camara: frontal (13 MP), posterior (50 MP)\nProcesador: Snapdragon 888\nRAM: 8 GB\nPantalla: 6.5 pulgadas OLED\nBateria: 4100 mAh",
      link: "https://www.google.com",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "Camara: frontal (10 MP), posterior (64 MP + 12 MP + 12 MP)\nProcesador: Exynos 2100\nRAM: 8 GB\nPantalla: 6.2 pulgadas Dynamic AMOLED\nBateria: 4000 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "Camara: frontal (12 MP), posterior (48 MP + 12 MP + 12 MP)\nProcesador: A17 Bionic\nRAM: 6 GB\nPantalla: 6.1 pulgadas Super Retina XDR\nBateria: 3200 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "Camara: frontal (13 MP), posterior (64 MP + 50 MP + 40 MP)\nProcesador: Snapdragon 888\nRAM: 8 GB\nPantalla: 6.6 pulgadas OLED\nBateria: 4360 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "Camara: frontal (40 MP), posterior (108 MP + 10 MP + 10 MP + 12 MP)\nProcesador: Exynos 2100\nRAM: 12 GB\nPantalla: 6.8 pulgadas Dynamic AMOLED\nBateria: 5000 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "Camara: frontal (12 MP), posterior (48 MP + 12 MP + 12 MP)\nProcesador: A17 Bionic\nRAM: 6 GB\nPantalla: 6.7 pulgadas Super Retina XDR\nBateria: 4352 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "Camara: frontal (16 MP), posterior (64 MP + 8 MP + 2 MP)\nProcesador: Kirin 820E\nRAM: 6 GB\nPantalla: 6.4 pulgadas LCD\nBateria: 4200 mAh",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/charger.png",
      title: "Cargador Rápido USB-C",
      price: "50000",
      description:
        "Cargador rápido USB-C compatible con múltiples dispositivos.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Inalámbrico",
      price: "75000",
      description:
        "Cargador inalámbrico de alta eficiencia para smartphones compatibles.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Multi Puertos",
      price: "65000",
      description:
        "Cargador con 3 puertos USB, ideal para cargar varios dispositivos a la vez.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador de Auto USB-C",
      price: "40000",
      description:
        "Cargador para automóvil con puerto USB-C para carga rápida durante el viaje.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Portátil (Power Bank)",
      price: "90000",
      description:
        "Batería externa de alta capacidad para cargar tus dispositivos en movimiento.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Inalámbrico Dual",
      price: "85000",
      description:
        "Cargador inalámbrico con doble plataforma para cargar dos dispositivos a la vez.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Rápido de Muro",
      price: "55000",
      description:
        "Cargador de pared con tecnología de carga rápida para dispositivos USB-C.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador USB 3.0",
      price: "60000",
      description:
        "Cargador USB 3.0 con puertos múltiples para una carga eficiente.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador Compacto",
      price: "45000",
      description: "Cargador compacto y ligero, ideal para viajar.",
      link: "product.html",
      category: "cargadores",
    },
    {
      image: "images/charger.png",
      title: "Cargador de Coche Premium",
      price: "70000",
      description: "Cargador de coche con múltiples puertos y diseño premium.",
      link: "product.html",
      category: "cargadores",
    },

    {
      image: "images/accesorios.png",
      title: "Funda Protectora",
      price: "30000",
      description: "Funda protectora de silicona para smartphones.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Auriculares Inalámbricos",
      price: "120000",
      description: "Auriculares Bluetooth con excelente calidad de sonido.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Soporte para Celular",
      price: "20000",
      description:
        "Soporte ajustable para celular, ideal para mesas y escritorios.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Cable de Datos",
      price: "15000",
      description: "Cable de datos USB-C a Lightning, resistente y duradero.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Llavero Smart",
      price: "18000",
      description:
        "Llavero inteligente para rastrear tu celular y objetos personales.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Batería Externa Compacta",
      price: "85000",
      description:
        "Batería externa de tamaño compacto para carga de emergencia.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Cargador Inalámbrico para Accesorios",
      price: "40000",
      description:
        "Base de carga inalámbrica diseñada para accesorios compatibles.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Soporte Multifuncional",
      price: "35000",
      description: "Soporte multifuncional para celular, tablet o e-reader.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Base para Cargador",
      price: "25000",
      description:
        "Base estable para organizar y cargar múltiples dispositivos.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Estuche de Viaje para Accesorios",
      price: "50000",
      description: "Estuche compacto para transportar accesorios y cables.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Adaptador Universal",
      price: "22000",
      description:
        "Adaptador universal compatible con múltiples tipos de conectores.",
      link: "product.html",
      category: "accesorios",
    },
    {
      image: "images/accesorios.png",
      title: "Pulsera Inteligente",
      price: "95000",
      description:
        "Pulsera inteligente con monitor de actividad y notificaciones.",
      link: "product.html",
      category: "accesorios",
    },
  ];

  // Configuración de paginación
  const itemsPerPage = 6;
  let currentPage = 1;
  let filteredProducts = products;
  // Configuración filtros
  const categoryFilter = document.getElementById("categoryFilter");
  const brandFilter = document.getElementById("brandFilter");
  const priceSort = document.getElementById("priceSort");
  const phoneBrands = ["Huawei", "Samsung", "Apple"];

  function populateBrandFilter() {
    brandFilter.innerHTML =
      '<option value="all">Todas las Marcas</option>' +
      phoneBrands
        .map(
          (brand) =>
            `<option value="${brand}">${brand.charAt(0).toUpperCase() + brand.slice(1)}</option>`
        )
        .join("");
  }

  // Función para poblar el dropdown de marcas
  function populateBrandFilter() {
    brandFilter.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todas las Marcas";
    brandFilter.appendChild(allOption);
    phoneBrands.forEach((brand) => {
      const opt = document.createElement("option");
      opt.value = brand;
      opt.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
      brandFilter.appendChild(opt);
    });
  }

  // Función para aplicar filtros
  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedBrand = brandFilter.value;
    // Filtrar por categoría
    if (selectedCategory === "all") {
      filteredProducts = [...products];
      brandFilter.style.display = "none";
    } else {
      filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      // Si la categoría es celulares, mostramos el dropdown de marcas
      if (selectedCategory === "celulares") {
        brandFilter.style.display = "block";
        populateBrandFilter();
        // Si se seleccionó una marca, filtrar también por marca
        if (selectedBrand && selectedBrand !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.brand === selectedBrand
          );
        }
      } else {
        brandFilter.style.display = "none";
      }
    }
    // Reinicio de la paginación
    currentPage = 1;
    applySort();
    displayProducts();
    displayPagination();
  }

  // Función para ordenar productos según el filtro de precio
  function applySort() {
    const sortOrder = priceSort.value;
    filteredProducts.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  // Agregar eventos a los filtros
  categoryFilter.addEventListener("change", applyFilters);
  brandFilter.addEventListener("change", applyFilters);
  priceSort.addEventListener("change", () => {
    applySort();
    displayProducts();
    displayPagination();
  });

  // Función para mostrar los productos de la página actual
  function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    const container = document.getElementById("product-container");
    container.innerHTML = "";

    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    productsToDisplay.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-sm-12 col-md-6 col-lg-3 mb-2";
      row.appendChild(col);

      const bestPhoneDiv = document.createElement("div");
      bestPhoneDiv.className = "containerCard noselect";
      col.appendChild(bestPhoneDiv);

      const canvas = document.createElement("div");
      canvas.className = "canvas";
      bestPhoneDiv.appendChild(canvas);

      for (let i = 1; i <= 9; i++) {
        const tracker = document.createElement("div");
        tracker.className = `tracker tr-${i}`;
        canvas.appendChild(tracker);
      }

      const card = document.createElement("div");
      card.id = "card";

      const cardContent = document.createElement("div");
      cardContent.className = "card-content";

      const cardGlare = document.createElement("div");
      cardGlare.className = "card-glare";
      cardContent.appendChild(cardGlare);

      const cyberLines = document.createElement("div");
      cyberLines.className = "cyber-lines";
      for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");
        cyberLines.appendChild(span);
      }
      cardContent.appendChild(cyberLines);

      const prompt = document.createElement("img");
      prompt.id = "prompt";
      prompt.className = "phone";
      prompt.alt = product.title;
      prompt.src = product.image;
      cardContent.appendChild(prompt);

      const title = document.createElement("div");
      title.className = "title";
      cardContent.appendChild(title);

      const titleText = document.createElement("h1");
      titleText.className = "title-text";
      titleText.textContent = product.title;
      title.appendChild(titleText);

      const description = document.createElement("p");
      description.className = "phone-description";
      description.innerHTML = product.description.replace(/\n/g, "<br>");
      title.appendChild(description);

      const glowingElements = document.createElement("div");
      glowingElements.className = "glowing-elements";
      for (let i = 1; i <= 3; i++) {
        const glow = document.createElement("div");
        glow.className = `glow-${i}`;
        glowingElements.appendChild(glow);
      }
      cardContent.appendChild(glowingElements);

      const subtitle = document.createElement("div");
      subtitle.className = "subtitle";
      const span1 = document.createElement("span");
      span1.textContent = "$";
      const span2 = document.createElement("span");
      span2.className = "highlight";
      span2.textContent = product.price;
      subtitle.appendChild(span1);
      subtitle.appendChild(span2);
      cardContent.appendChild(subtitle);

      const cardParticles = document.createElement("div");
      cardParticles.className = "card-particles";
      for (let i = 0; i < 6; i++) {
        const span = document.createElement("span");
        cardParticles.appendChild(span);
      }
      cardContent.appendChild(cardParticles);

      const cornerElements = document.createElement("div");
      cornerElements.className = "corner-elements";
      for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");
        cornerElements.appendChild(span);
      }
      cardContent.appendChild(cornerElements);

      const scanLine = document.createElement("div");
      scanLine.className = "scan-line";
      cardContent.appendChild(scanLine);

      card.appendChild(cardContent);
      canvas.appendChild(card);
    });
  }

  // Función para generar la lista de páginas numéricas
  function createPaginationNumbers(totalPages, currentPage) {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push({ type: "page", page: i });
      }
    } else {
      if (currentPage <= 4) {
        //cerca del inicio
        for (let i = 1; i <= 5; i++) {
          pages.push({ type: "page", page: i });
        }
        pages.push({ type: "ellipsis" });
        pages.push({ type: "page", page: totalPages });
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        //en el medio
        pages.push({ type: "page", page: 1 });
        pages.push({ type: "page", page: currentPage - 1 });
        pages.push({ type: "page", page: currentPage });
        pages.push({ type: "page", page: currentPage + 1 });
        pages.push({ type: "ellipsis" });
        pages.push({ type: "page", page: totalPages });
      } else {
        //cerca del final
        pages.push({ type: "page", page: 1 });
        pages.push({ type: "ellipsis" });
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push({ type: "page", page: i });
        }
      }
    }
    return pages;
  }

  // Función para renderizar los controles de paginación
  function displayPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pageNumbers = createPaginationNumbers(totalPages, currentPage);

    const wrapper = document.createElement("div");
    wrapper.className = "pagination-wrapper";
    paginationContainer.appendChild(wrapper);

    // Botón "Anterior"
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&laquo;";
    prevBtn.className = "page-btn btn btn-secondary mx-1";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayProducts();
        displayPagination();
      }
    });
    wrapper.appendChild(prevBtn);

    // Botones numéricos y "..."
    pageNumbers.forEach((item) => {
      let btn = document.createElement("button");
      if (item.type === "page") {
        btn.textContent = item.page;
        btn.className = "page-btn btn btn-secondary mx-1";
        if (item.page === currentPage) {
          btn.classList.add("active");
        }
        btn.addEventListener("click", () => {
          currentPage = item.page;
          displayProducts();
          displayPagination();
        });
      } else if (item.type === "ellipsis") {
        btn.textContent = "...";
        btn.className = "page-btn ellipsis mx-1";
        btn.disabled = true;
      }
      wrapper.appendChild(btn);
    });

    // Botón "Siguiente"
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&raquo;";
    nextBtn.className = "page-btn btn btn-secondary mx-1";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
        displayPagination();
      }
    });
    wrapper.appendChild(nextBtn);
  }

  // Inicializa la visualización de productos y paginación
  displayProducts();
  displayPagination();
});
