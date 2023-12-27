import React from "react";
import {
  formatearFechaYHora,
  getPromedio,
  getUVColor,
} from "./assets/MedicionUtils";

const MedicionUV = (props) => {
  const { dispositivos, selectedUVData } = props;
  return (
    <div
      className="card text-center"
      style={{
        width: "150px",
        height: "200px",
        backgroundColor: "#335475",
        borderRadius: "10px",
      }}
    >
      <div className="row justify-content-center">
        <a
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "Arial",
            fontWeight: "bold",
          }}
        >
          UV
        </a>
        <a style={{ color: "white", fontSize: "15px" }}>
          {selectedUVData ? "ID " + selectedUVData.name : "PROMEDIO"}
        </a>
        <a
          style={{
            color: getUVColor(
              selectedUVData ? selectedUVData.uv : getPromedio(dispositivos)
            ).color,
            fontSize: "95px",
            fontFamily: "Agency FB",
          }}
        >
          {selectedUVData ? selectedUVData.uv : getPromedio(dispositivos)}
        </a>
      </div>
      <label
        style={{
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: "15px",
          width: "150px",
        }}
      >
        {selectedUVData
          ? formatearFechaYHora(selectedUVData.fecha)
          : formatearFechaYHora(Date.now())}
      </label>
    </div>
  );
};

export default MedicionUV;
