import CategoriasExposicion from "../Componentes/CategoriasExposicion";
import MapView from "../Componentes/Mapa/MapaView";
import Recomendaciones from "../Componentes/Recomendaciones";
import Header from "../Componentes/Header";
import MedicionUV from "../Componentes/MedicionUV";
const PaginaInicio = () => {
  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "2%",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-auto">
            <MedicionUV />
          </div>
          <div className="col-auto">
            <MapView />
          </div>
          <div className="col-auto">
            <CategoriasExposicion />
            <Recomendaciones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicio;
