import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name, geometry, uv } = props.data;
  const { setSelectedUVData } = props;
  const handleVerDatosClick = () => {
    setSelectedUVData((prev) => props.data);
  };
  return (
    <Popup>
      <div>
<<<<<<< HEAD
        {!props.data.estado && (
          <p
            style={{
              color: "red",
            }}
          >
            <strong>Estado:</strong> Desactivado
          </p>
        )}
=======
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
        <p>
          <strong>Identificador:</strong> {name}
        </p>
        <p>
          <strong>Latitud:</strong> {geometry[0]}
        </p>
        <p>
          <strong>Longitud:</strong> {geometry[1]}
        </p>
        <p>
          <strong>UV:</strong> {uv}
        </p>
<<<<<<< HEAD
        {props.data.estado && (
          <div className="text-center">
            <a
              onClick={handleVerDatosClick}
              style={{
                textDecoration: "underline",
                textDecorationColor: "transparent",
                borderBottom: "1px solid #000", // Raya debajo del texto
                cursor: "pointer",
                color: "#000", // Color del texto
                transition: "color 0.3s, borderBottom 0.3s", // Transición suave
                display: "inline-block",
                marginBottom: "-1px", // Evita un pequeño salto al pasar de sin raya a con raya
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#007bff";
                e.target.style.textDecorationColor = "#007bff";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#000";
                e.target.style.textDecorationColor = "transparent";
              }}
            >
              Ver datos...
            </a>
          </div>
        )}
=======
        <div className="text-center">
          <a
            onClick={handleVerDatosClick}
            style={{
              textDecoration: "underline",
              textDecorationColor: "transparent",
              borderBottom: "1px solid #000", // Raya debajo del texto
              cursor: "pointer",
              color: "#000", // Color del texto
              transition: "color 0.3s, borderBottom 0.3s", // Transición suave
              display: "inline-block",
              marginBottom: "-1px", // Evita un pequeño salto al pasar de sin raya a con raya
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#007bff";
              e.target.style.textDecorationColor = "#007bff";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#000";
              e.target.style.textDecorationColor = "transparent";
            }}
          >
            Ver datos...
          </a>
        </div>
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
      </div>
    </Popup>
  );
};

export default MarkerPopup;
