import { useParams } from "react-router-dom";
import products from "../../assets/products/products.json";
import ProductCard from "../productCard/ProductCard";
import { useState, useMemo, useEffect } from "react";

import "./categoryProduct.css";

const categoryNames = {
  celulares: "Celulares",
  accesorios: "Accesorios",
  tablets: "Tablets",
  sonido: "Sonido",
};

const ITEMS_TO_SHOW = 8;

const CategoryProduct = ({ onAddToCart }) => {
  const { categoria } = useParams();
  const [visibleCount, setVisibleCount] = useState(ITEMS_TO_SHOW);


  const [selectedBrand, setSelectedBrand] = useState("all");

  const [maxPrice, setMaxPrice] = useState(0);

  const filteredByCategory = useMemo(
    () => products.filter(p => p.category === categoria),
    [categoria]
  );

  // Extraer marcas
  const brands = useMemo(() => {
    const setMarcas = new Set(filteredByCategory.map(p => p.name.split(" ")[0]));
    return ["all", ...setMarcas];
  }, [filteredByCategory]);

  // Iniciar maxPrice al montar o cambiar categoría
  useEffect(() => {
    if (filteredByCategory.length) {
      const precios = filteredByCategory.map(p => p.price);
      setMaxPrice(Math.max(...precios));
    }
  }, [filteredByCategory]);

  const handleBrandChange = e => {
    setSelectedBrand(e.target.value);
    setVisibleCount(ITEMS_TO_SHOW);
  };

  const handleMaxPriceChange = e => {
    setMaxPrice(Number(e.target.value));
    setVisibleCount(ITEMS_TO_SHOW);
  };

  // Filtrar por marca y por precio hasta maxPrice
  const filteredProducts = filteredByCategory.filter(p => {
    const marca = p.name.split(" ")[0];
    return (
      (selectedBrand === "all" || marca === selectedBrand) &&
      p.price <= maxPrice
    );
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <div className="bannerProduct">
        <h2>{categoryNames[categoria] || "Productos"}</h2>
      </div>

      {/* Barra de filtros */}
      <div className="filters-container">
        {/* Pills de marcas */}
        <div className="filter-item">
          <label>Marca:</label>
          <div className="brand-pills">
            {brands.map(b => (
              <button
                key={b}
                className={`pill ${selectedBrand === b ? "active" : ""}`}
                onClick={() =>
                  handleBrandChange({ target: { value: b } })
                }
              >
                {b === "all" ? "Todas" : b}
              </button>
            ))}
          </div>
        </div>

        {/* Slider de precio Máximo */}
        <div className="filter-item">
          <label>Hasta: ${maxPrice.toLocaleString()}</label>
          <input
            type="range"
            min={Math.min(...filteredByCategory.map(p => p.price))}
            max={Math.max(...filteredByCategory.map(p => p.price))}
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      <section className="general-container">
        <div className="categoryProducts">
          {visibleProducts.length > 0 ? (
            visibleProducts.map(producto => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAdd={onAddToCart}
              />
            ))
          ) : (
            <p>No hay productos que coincidan con esos filtros.</p>
          )}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="show-more-container">
            <button
              className="show-more-btn"
              onClick={() => setVisibleCount(v => v + ITEMS_TO_SHOW)}
            >
              Mostrar más
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CategoryProduct;
