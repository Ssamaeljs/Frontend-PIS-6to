import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import React from "react";
import colorValues from "../../../utilidades/data/colorValues.json";
const CategoriasExposicion = () => {
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
              <th>Rango</th>
              <th>Colores</th>
            </tr>
          </thead>
          <tbody>
            {colorValues.map((categoria, index) => (
              <tr key={index}>
                <td>{categoria.tipo}</td>
                <td>{categoria.valor_max}</td>
                <td style={{ backgroundColor: categoria.color }}></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default CategoriasExposicion;
