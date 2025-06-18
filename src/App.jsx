import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CategoryProduct from "./components/categoryProduct/CategoryProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={"CONTACTANOS"}/>
        <Route path="/:categoria" element={<CategoryProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
