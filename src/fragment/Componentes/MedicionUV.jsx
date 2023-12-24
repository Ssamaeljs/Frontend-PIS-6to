import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const MedicionUV = () => {
  const indices = ["1-2", "3-7", "8+"];
  const description = [
    "Puede permanecer en el exterior sin riesgos.",
    "Pongase camisa, crema de proteccion solar, sombrero y gafas de sol",
    "Son imprescindibles camisa, crema de proteccion solar, sombrero y gafas de sol",
  ];

  return (
    <div className="card text-center" style={{ maxWidth: "30rem" }}>
      <div className="card-header">
        <h5 className="card-title" style={{ fontWeight: "bold" }}>
          Medicion
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-auto">
            <div
              style={{
                width: "150px",
                height: "250px",
                backgroundColor: "#335475",
                borderRadius: "10px",
              }}
            >
              <div className="row justify-content-center">
                <a
                  style={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                  }}
                >
                  UV
                </a>
                <a style={{ color: "white", fontSize: "15px" }}>INDEX</a>
                <a
                  style={{
                    color: "white",
                    fontSize: "100px",
                    fontFamily: "Agency FB",
                  }}
                >
                  0
                </a>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div
              style={{
                width: "150px",
                height: "250px",
                backgroundColor: "blue",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicionUV;
