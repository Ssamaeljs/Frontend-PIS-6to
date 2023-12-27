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
        <div className="text-center">
          <a href="#/" onClick={handleVerDatosClick}>
            Ver datos...
          </a>
        </div>
      </div>
    </Popup>
  );
};

export default MarkerPopup;
