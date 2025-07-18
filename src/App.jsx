import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./hooks/useCart";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CategoryProduct from "./components/categoryProduct/CategoryProduct";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";

import "./App.css";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) =>
    setCartItems((prev) => addToCart(prev, product));
  const handleIncrease = (id) =>
    setCartItems((prev) => increaseQuantity(prev, id));
  const handleDecrease = (id) =>
    setCartItems((prev) => decreaseQuantity(prev, id));
  const handleRemove = (id) => setCartItems((prev) => removeFromCart(prev, id));

  return (
    <BrowserRouter>
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={totalCount} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart}/>} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/:categoria" element={<CategoryProduct onAddToCart={handleAddToCart}/>} />
      </Routes>
            <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
