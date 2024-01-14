import React, { useState } from "react";
import MapView from "../Componentes/Mapa/MapaView";
import MedicionView from "../Componentes/MedicionUV/MedicionView";
import Recomendaciones from "../Componentes/Tablas/Recomendaciones";

const ContenedorInicio = (props) => {
  const { dispositivos } = props;
  const [selectedUVData, setSelectedUVData] = useState(null);
  return (
    <div className="row">
      <div className="col-6 ">
        <MapView
          dispositivos={dispositivos}
          setSelectedUVData={setSelectedUVData}
        />
      </div>
      <div className="col-4">
        <MedicionView
          dispositivos={dispositivos}
          selectedUVData={selectedUVData}
        />
      </div>
      <div className="col-2">
        <Recomendaciones />
      </div>
    </div>
  );
};

export default ContenedorInicio;
