document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Edge",
      price: "360000",
      description:
        "El iPhone 16 Edge tiene un diseño innovador con bordes curvos y gran rendimiento.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Ultra",
      price: "330000",
      description:
        "El Huawei P50 Ultra ofrece un rendimiento superior y excelentes capacidades de cámara.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Mini",
      price: "240000",
      description:
        "El Samsung S21 Mini es compacto y potente, ideal para quienes buscan un dispositivo pequeño.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 SE",
      price: "310000",
      description:
        "El iPhone 16 SE combina rendimiento y precio accesible, ideal para usuarios exigentes.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Standard",
      price: "290000",
      description:
        "El Huawei P50 Standard es una excelente opción con un balance entre prestaciones y precio.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Classic",
      price: "260000",
      description:
        "El Samsung S21 Classic mantiene la calidad y el rendimiento característicos de la serie.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Plus",
      price: "380000",
      description:
        "El iPhone 16 Plus mejora aspectos del rendimiento y la cámara en comparación con versiones anteriores.",
      link: "product.html",
      category: "celulares",
      brand: "Apple",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Eco",
      price: "150000",
      description:
        "El Huawei P50 Eco es una opción más económica sin sacrificar funcionalidades esenciales.",
      link: "product.html",
      category: "celulares",
      brand: "Huawei",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Eco",
      price: "220000",
      description:
        "El Samsung S21 Eco ofrece un rendimiento decente a un precio muy competitivo.",
      link: "product.html",
      category: "celulares",
      brand: "Samsung",
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
    // Reiniciamos la paginación
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

    const innerContainer = document.createElement("div");
    innerContainer.className = "container";
    container.appendChild(innerContainer);

    const row = document.createElement("div");
    row.className = "row";
    innerContainer.appendChild(row);

    productsToDisplay.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-sm-12 col-lg-4 mb-5";
      row.appendChild(col);

      const bestPhoneDiv = document.createElement("div");
      bestPhoneDiv.className = "best_phone";
      col.appendChild(bestPhoneDiv);

      const img = document.createElement("img");
      img.className = "phone-img";
      img.src = product.image;
      bestPhoneDiv.appendChild(img);

      if (product.title) {
        const h2 = document.createElement("h2");
        h2.className = "phone_title";
        h2.textContent = product.title;
        bestPhoneDiv.appendChild(h2);
      }

      const priceSpan = document.createElement("span");
      priceSpan.className = "phone_price";
      priceSpan.innerHTML = `$ <span style="color: #7ad01e; font-size: 70%">${product.price}</span>`;
      bestPhoneDiv.appendChild(priceSpan);

      const p = document.createElement("p");
      p.className = "phone_description";
      p.textContent = product.description;
      bestPhoneDiv.appendChild(p);

      const a = document.createElement("a");
      a.href = product.link;
      a.className = "buy_phone";
      a.textContent = "Comprar";
      bestPhoneDiv.appendChild(a);
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
