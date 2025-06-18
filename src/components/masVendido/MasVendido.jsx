import { useState, useEffect, useRef, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import MasVendidos from "../../assets/products/products.json";
import ProductCard from "../productCard/ProductCard";
import "./masVendido.css";

const MasVendido = ({ onAddToCart }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setStartIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topVendidos = [...MasVendidos]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 6);

  const visibleProducts = topVendidos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? topVendidos.length - itemsPerPage : prev - 1
    );
  };

  const handleNext = useCallback(() => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= topVendidos.length ? 0 : prev + 1
    );
  }, [itemsPerPage, topVendidos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsPerPage, topVendidos.length, handleNext]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  return (
    <>
      <h2>Productos Más Vendidos</h2>
      <section className="masVendido">
        <div className="slider-container" ref={containerRef} {...swipeHandlers}>
          <button
            className="button-product prev-product"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <img src="/l-arrow.svg" alt="Anterior" />
          </button>
          {visibleProducts.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onAdd={onAddToCart}
            />
          ))}
          <button
            className="button-product next-product"
            onClick={handleNext}
            aria-label="Siguiente"
          >
            <img src="/r-arrow.svg" alt="Siguiente" />
          </button>
        </div>
        <div className="marketing-img">
          <img src="/masvendidos/mama.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default MasVendido;
