import novedadesData from "../../assets/products/products.json";
import "./novedades.css";

const Novedades = () => {
  const novedadesRecientes = [...novedadesData]
    .sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation)) 
    .slice(0, 6);

  return (
    <>
      <h2>Novedades</h2>
      <section className="novedades">
        <div className="novedades-list">
          {novedadesRecientes.map((novedad) => (
            <div key={novedad.id} className="new-article">
              <a href={`#${novedad.id}`}>
                <img src={novedad.imgUrl} alt={novedad.alt} />
                <h3>{novedad.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Novedades;
