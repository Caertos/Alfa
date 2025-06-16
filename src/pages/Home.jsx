import Slider from "../components/slider/Slider";
import Novedades from "../components/novedades/Novedades";
import MasVendido from "../components/masVendido/MasVendido";
import Marcas from "../components/marcas/Marcas";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div className="general-container">
            <Slider />
            <Novedades />
            <MasVendido />
            <Marcas />
            <Footer />
        </div>
    );
}

export default Home;