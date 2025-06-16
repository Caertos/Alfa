import novedadesData from "../../assets/novedadesData/novedadesData";
import "./novedades.css";

const Novedades = () => {
  return (
    <>
      <h2>Novedades</h2>
      <section className="novedades">
        <div className="novedades-list">
          {novedadesData.map((novedad) => (
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
