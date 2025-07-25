import './productCard.css'

const ProductCard = ({ producto, onAdd }) => {

  return (
    <span className="product-card" key={producto.id}>
      <img src={producto.imgUrl} alt={producto.alt} className="product-image" />
      <p className="price">$ {producto.price.toLocaleString()}</p>
      <p>{producto.name}</p>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onAdd(producto);
        }}
      >
        <img src="/cart.svg" alt="Carrito" />AGREGAR
      </a>
    </span>
  );
};

export default ProductCard;