import "./cart.css";
import ProductCart from "./productCart";

const Cart = ({
  open,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className={`cart-drawer${open ? " open" : ""}`}>
      <div className="cart-backdrop" onClick={onClose} />
      <aside className="cart-panel">
        <div className="cart-title">
        <h2>Mi Compra</h2>
        <button
          className="cart-close"
          onClick={onClose}
          aria-label="Cerrar carrito"
        >
          &times;
        </button>
        </div>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <div className="cart-products">
            {cartItems.map(({ product, quantity }) => (
              <ProductCart
                key={product.id}
                product={product}
                quantity={quantity}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </div>
        ) : (
          <div className="cart-empty">Tu carrito está vacío.</div>
        )}
      </aside>
    </div>
  );
};

export default Cart;
