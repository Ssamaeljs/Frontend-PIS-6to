import React, { useState } from "react";
import MedicionUV from "./MedicionUV";
import MedicionInfo from "./MedicionInfo";
import CategoriasExposicion from "../Tablas/CategoriasExposicion";

const MedicionView = (props) => {
  const { selectedUVData, promedio } = props;
  return (
    <div
      className="card"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundColor: "rgba(19, 35, 64, 0.7)",
      }}
    >
      <div className="card-header">
        <h3
          className="card-title text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Medición
        </h3>
      </div>
      <div className="card-body">
        <div className="row ">
          <div className="col-5">
            <MedicionUV selectedUVData={selectedUVData} promedio={promedio} />
          </div>
          <div className="col-sm">
            <div className="row">
              <MedicionInfo
                selectedUVData={selectedUVData}
                promedio={promedio}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ padding: "38px" }}>
          <div className="col">
            <CategoriasExposicion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicionView;
