import MasVendidos from "../../assets/masVendido/masVendido";
import "./masVendido.css";

const MasVendido = () => {
  return (
    <>
      <h2>Producto Más Vendido</h2>
      <section className="masVendido">
        <div>
          {MasVendidos.map((producto) => (
            <span key={producto.id} >
                <img src={producto.imgUrl} alt={producto.alt} className="product-image"/>
                <p className="price">$ {producto.price}</p>
                <p>{producto.name}</p>
                <a href="#"><img src="/cart.svg" />AGREGAR</a>
            </span>
          ))}
        </div>
        <div><img src="/masvendidos/mama.png" alt="" /></div>
      </section>
    </>
  );
};

export default MasVendido;
