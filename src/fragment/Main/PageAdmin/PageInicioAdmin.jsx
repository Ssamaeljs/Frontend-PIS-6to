import React, { useEffect, useState } from "react";
import MapView from "../../Componentes/Mapa/MapaView";
import MedicionView from "../../Componentes/MedicionUV/MedicionView";
import CategoriasExposicion from "../../Componentes/Tablas/CategoriasExposicion";
import Recomendaciones from "../../Componentes/Tablas/Recomendaciones";
import { GET } from "../../../hooks/Conexion";
import { getToken } from "../../../utilidades/Sessionutil";

const PageInicioAdmin = () => {
  const [llDispositivos, setLlDispositivos] = useState(false);
  const [dispositivos, setDispositivos] = useState([]);
  const [selectedUVData, setSelectedUVData] = useState(null);

  useEffect(() => {
    if (!llDispositivos) {
      GET("listar/dispositivo", getToken()).then((info) => {
        if (info.code !== 200) {
        } else {
          setDispositivos(info.info);
          setLlDispositivos((prev) => !prev);
        }
      });
    }
  }, [llDispositivos]);
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "5%",
        }}
      >
        {llDispositivos && (
          <>
            <div className="row justify-content-center">
              <div className="col-auto">
                <MapView
                  dispositivos={dispositivos}
                  setSelectedUVData={setSelectedUVData}
                />
              </div>
              <div className="col-auto">
                <MedicionView
                  dispositivos={dispositivos}
                  selectedUVData={selectedUVData}
                />
                <CategoriasExposicion />
                <Recomendaciones />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PageInicioAdmin;
