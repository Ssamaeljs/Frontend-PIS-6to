import CategoriasExposicion from "../Componentes/CategoriasExposicion";
import MapView from "../Componentes/Mapa/MapaView";
import Recomendaciones from "../Componentes/Recomendaciones";
const PaginaInicio = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Recomendaciones />
          </div>
          <div className="col-sm">
            <MapView />
          </div>
          <div className="col-auto">
            <CategoriasExposicion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicio;
