import React from "react";
import MedicionUV from "./MedicionUV";
import MedicionInfo from "./MedicionInfo";
import { Card } from "react-bootstrap";

const MedicionView = (props) => {
  const { dispositivos, selectedUVData } = props;
  return (
    <Card style={{ maxWidth: "50rem", maxHeight: "20rem" }}>
      <div className="card-header">
        <h5 className="card-title text-center" style={{ fontWeight: "bold" }}>
          Medición
        </h5>
      </div>
      <div className="card-body">
        <div className="row" style={{ height: "14rem" }}>
          <div className="col-md-5">
            <MedicionUV
              dispositivos={dispositivos}
              selectedUVData={selectedUVData}
            />
          </div>
          <div className="col-sm">
            <MedicionInfo
              dispositivos={dispositivos}
              selectedUVData={selectedUVData}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MedicionView;
