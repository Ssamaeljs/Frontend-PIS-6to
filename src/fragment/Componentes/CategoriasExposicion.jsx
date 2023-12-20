import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import React from "react";
const CategoriasExposicion = () => {
  const categorias = [
    "Baja",
    "Moderada",
    "Alta",
    "Muy Alta",
    "Extremadamente Alta",
  ];
  const valores = ["< 2", "3-5 ", "6-7", "8-10", "11 >"];
  const colores = ["008f39", "fae927", "ba3b35", "b3140c", "4c3689"];

  return (
    <div className="card text-center" style={{ maxWidth: "30rem" }}>
      <div className="card-header">
        <h5 className="card-title" style={{ fontWeight: "bold" }}>
          Categorias de exposición
        </h5>
      </div>
      <div className="card-body">
        <Table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Valores</th>
              <th>Colores</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, index) => (
              <tr key={index}>
                <td>{categoria}</td>
                <td>{valores[index]}</td>
                <td style={{ backgroundColor: `#${colores[index]}` }}></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default CategoriasExposicion;
