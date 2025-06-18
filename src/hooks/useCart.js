export function addToCart(cartItems, product) {
  const found = cartItems.find(item => item.product.id === product.id);
  if (found) {
    return cartItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
        : item
    );
  }
  return [...cartItems, { product, quantity: 1 }];
}

export function increaseQuantity(cartItems, id) {
  return cartItems.map(item =>
    item.product.id === id
      ? { ...item, quantity: Math.min(item.quantity + 1, item.product.stock) }
      : item
  );
}

export function decreaseQuantity(cartItems, id) {
  return cartItems.map(item =>
    item.product.id === id
      ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
      : item
  );
}

export function removeFromCart(cartItems, id) {
  return cartItems.filter(item => item.product.id !== id);
}