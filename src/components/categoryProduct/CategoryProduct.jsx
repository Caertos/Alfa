import { useParams } from "react-router-dom";
import products from "../../assets/products/products.json";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";

import "./categoryProduct.css";

const categoryNames = {
  celulares: "Celulares",
  accesorios: "Accesorios",
  tablets: "Tablets",
  sonido: "Sonido",
};

const ITEMS_TO_SHOW = 8;

const CategoryProduct = () => {
  const { categoria } = useParams();
  const [visibleCount, setVisibleCount] = useState(ITEMS_TO_SHOW);

  const filteredProducts = products.filter(
    (product) => product.category === categoria
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_TO_SHOW);
  };

  return (
    <>
      <div className="bannerProduct">
        <h2>{categoryNames[categoria] || "Productos"}</h2>
      </div>

      <section className="general-container">
        <div className="categoryProducts">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={handleShowMore}>
              Mostrar más
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CategoryProduct;