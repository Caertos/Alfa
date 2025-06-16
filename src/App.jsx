import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celulares" element={<div>Celulares Page</div>} />
        <Route path="/accesorios" element={<div>Accesorios Page</div>} />
        <Route path="/tablets" element={<div>Tablets Page</div>} />
        <Route path="/sonido" element={<div>Sonido Page</div>} />
        <Route path="/servicios" element={<div>Servicios Page</div>} />
        <Route path="/ofertas" element={<div>Ofertas Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
