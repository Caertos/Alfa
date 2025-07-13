import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./navbarStyle.css";

export default function Navbar({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to="/">
            <img className="enterprise_logo" src="/logoAlfa.webp" alt="Logo" />
          </Link>
          <div className="search_container">
            <input
              className="search_input"
              type="text"
              placeholder="Buscar..."
            />
            <Link className="search_icon" to="#">
              <img src="/search.svg" alt="Buscar" />
            </Link>
          </div>
          <div className="navbar_icons">
            <Link to="#">
              <img src="/user.svg" alt="Usuario" />
            </Link>
            <Link className="cart" onClick={onCartOpen}>
              <img src="/cart.svg" alt="Carrito" />
            </Link>
          </div>
        </div>

        <button
          className="hamburger_menu"
          ref={buttonRef}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar_secondary">
          <ul
            className={`navbar_links${menuOpen ? " open" : ""}`}
            ref={menuRef}
          >
{/*             <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img className="homeIcon" src="/home.svg" alt="" />
              </Link>
            </li> */}
            <li>
              <Link to="/celulares" onClick={() => setMenuOpen(false)}>
                Celulares
              </Link>
            </li>
            <li>
              <Link to="/accesorios" onClick={() => setMenuOpen(false)}>
                Accesorios
              </Link>
            </li>
            <li>
              <Link to="/tablets" onClick={() => setMenuOpen(false)}>
                Tablets
              </Link>
            </li>
            <li>
              <Link to="/sonido" onClick={() => setMenuOpen(false)}>
                Sonido
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setMenuOpen(false)}>
                Contactanos
              </Link>
            </li>
          </ul>
          <span className="navbar_offers">
            <img src="/gift.svg" alt="" />
            <Link to="/ofertas">OFERTAS</Link>
          </span>
        </div>
      </nav>
    </>
  );
}
