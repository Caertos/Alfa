import Slider from "../components/slider/Slider";
import Novedades from "../components/novedades/Novedades";
import MasVendido from "../components/masVendido/MasVendido";
import Marcas from "../components/marcas/Marcas";

const Home = ({onAddToCart}) => {
  return (
    <>
      <div className="general-container">
        <Slider />
        <Novedades />
        <MasVendido onAddToCart={onAddToCart}/>
      </div>
      <div className="secondary-container">
        <Marcas />
      </div>
    </>
  );
};

export default Home;
