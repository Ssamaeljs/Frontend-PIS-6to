import CategoriasExposicion from "../Componentes/Tablas/CategoriasExposicion";
import MapView from "../Componentes/Mapa/MapaView";
import Recomendaciones from "../Componentes/Tablas/Recomendaciones";
import Header from "../Componentes/tools/Header";
import { GET } from "../../hooks/Conexion";
import { getToken } from "../../utilidades/Sessionutil";
import { useEffect, useState } from "react";
import MedicionView from "../Componentes/MedicionUV/MedicionView";
import Footer from "../Componentes/tools/Footer";
const PaginaInicio = () => {
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
      <Header />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "2%",
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
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default PaginaInicio;
