import "./cart.css";

export default function ProductCart({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="product-cart">
      <img
        className="product-cart-img"
        src={product.imgUrl}
        alt={product.name}
      />
      <div className="product-cart-info">
        <div className="product-cart-price">
          ${product.price.toLocaleString()}
        </div>
        <div className="product-cart-title">{product.name}</div>
        <div className="product-cart-qty">
          <button
            className="qty-btn"
            onClick={() => onDecrease(product.id)}
            disabled={quantity <= 1}
            aria-label="Restar"
          >
            <span aria-hidden="true">−</span>
          </button>
          <span className="qty-value">{quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onIncrease(product.id)}
            disabled={quantity >= product.stock}
            aria-label="Sumar"
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
      <div className="remove-container">
      <button
        className="product-cart-remove"
        onClick={() => onRemove(product.id)}
        aria-label="Eliminar"
        title="Eliminar"
      >
        <img className="trashIcon" src="/trashIcon.svg" alt="Eliminar" />
      </button>
      </div>
    </div>
  );
}
