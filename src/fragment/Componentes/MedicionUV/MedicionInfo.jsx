import React from "react";
import {
  formatearFechaYHora,
  getPromedio,
  getUVColor,
} from "./assets/MedicionUtils";

const MedicionInfo = (props) => {
  const { dispositivos, selectedUVData } = props;
  return (
    <div
      className="col-md-6 text-right"
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <div className="row">
        <div
          style={{
            height: "50px",
          }}
        >
          <a
            style={{
              color: getUVColor(
                selectedUVData ? selectedUVData.uv : getPromedio(dispositivos)
              ).color,
              fontSize: "12px",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
            {
              getUVColor(
                selectedUVData ? selectedUVData.uv : getPromedio(dispositivos)
              ).tipo
            }
          </a>
        </div>
        <a
          style={{
            color: "black",
            fontSize: "12px",
            fontFamily: "Arial",
            fontWeight: "bold",
          }}
        >
          {
            getUVColor(
              selectedUVData ? selectedUVData.uv : getPromedio(dispositivos)
            ).descripcion
          }
        </a>
      </div>
    </div>
  );
};

export default MedicionInfo;
