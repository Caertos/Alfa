import './productCard.css'

const ProductCard = ({ producto }) => {
  return (
    <span className="product-card" key={producto.id}>
      <img src={producto.imgUrl} alt={producto.alt} className="product-image" />
      <p className="price">$ {producto.price}</p>
      <p>{producto.name}</p>
      <a href="#"><img src="/cart.svg" alt="Carrito" />AGREGAR</a>
    </span>
  );
};

export default ProductCard;