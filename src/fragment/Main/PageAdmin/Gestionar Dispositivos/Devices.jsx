import React, { useEffect, useState } from "react";
import { GET } from "../../../../hooks/Conexion";
import { getToken } from "../../../../utilidades/Sessionutil";
import { Modal, Spinner } from "react-bootstrap";
import RegistrarDispositivo from "./Mod/RegistrarDispositivo";
import EditarDispositivo from "./Mod/EditarDispositivo";
import { useNavigate } from "react-router";
const Devices = () => {
  const navegation = useNavigate();

  const [llDispositivos, setLlDispositivos] = useState(false);
  const [dispositivos, setDispositivos] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [terminoBuscado, setTerminoBuscado] = useState("");
  const [buscarEstado, setBuscarEstado] = useState("");

  const [showRegistrarDispositivo, setShowRegistrarDispositivo] =
    useState(false);
  const [showEditarDispositivo, setShowEditarDispositivo] = useState(false);
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

  const [able, setAble] = useState(false);
  useEffect(() => {
    if (!llDispositivos) {
      GET("listar/api_dispositivo", getToken())
        .then((info) => {
          if (info.code !== 200) {
            console.error("Error en la respuesta:", info);
            setError("Error de Conexión | " + info.msg);
          } else {
            setDispositivos(info.info);
          }
        })
        .catch((error) => {
          console.error(error);
          setError("Error de Conexión");
        })
        .finally(() => {
          setLlDispositivos(true);
          setLoading(false);
        });
    }
  }, [llDispositivos, setLoading]);

  const BuscarDispositivo = (e) => {
    setTerminoBuscado(e.target.value);
  };

  const BuscarDispositivo_Estado = (e) => {
    setBuscarEstado(e.target.value);
  };

  const dispositivosFiltrados = dispositivos.filter((device) => {
    const estadoActivo = "ACTIVO";
    const estadoInactivo = "INACTIVO";
    const dispositivoBuscado =
      String(device.identificador)
        .toLowerCase()
        .includes(terminoBuscado.toLowerCase()) ||
      device.latitud.toLowerCase().includes(terminoBuscado.toLowerCase()) ||
      device.longitud.toLowerCase().includes(terminoBuscado.toLowerCase()) ||
      (terminoBuscado.toLowerCase() === estadoActivo.toLowerCase() &&
        device.activo) ||
      (terminoBuscado.toLowerCase() === estadoInactivo.toLowerCase() &&
        !device.activo);
    if (buscarEstado !== "Seleccionar") {
      if (buscarEstado === "ACTIVO") {
        return dispositivoBuscado && device.activo;
      }
      if (buscarEstado === "INACTIVO") {
        return dispositivoBuscado && !device.estado;
      }
      return dispositivoBuscado;
    }

    return dispositivoBuscado;
  });

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-5">
          <h1
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "Arial",
              fontWeight: "600",
              borderBottom: "3px solid #e20613",
            }}
          >
            Dispositivos del Sistema
          </h1>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <div
            className="row justify-content-center"
            style={{ padding: "100px", scale: "1" }}
          >
            <Spinner
              style={{ width: "100px", height: "100px" }}
              animation="border"
              variant="success"
            />
            <h1
              style={{
                color: "white",
                fontSize: "25px",
                fontFamily: "Arial",
                fontWeight: "600",
                borderBottom: "1px solid #e20613",
              }}
            >
              Cargando Dispositivos...
            </h1>
          </div>
        ) : error ? (
          <>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/d/df/UNL3.png"
              }
              alt="404"
              style={{ width: "20%" }}
            />
            <h1
              style={{
                color: "red",
                fontSize: "25px",
                fontFamily: "Arial",
                fontWeight: "600",
              }}
            >
              {error}
            </h1>
          </>
        ) : (
          llDispositivos &&
          dispositivos.length > 0 && (
            <div
              className="row"
              style={{
                scale: "1",
                padding: "50px",
                fontFamily: "Arial",
                fontWeight: "600",
              }}
            >
              <div
                className="col-3"
                style={{
                  paddingBottom: "20px",
                }}
              >
                <input
                  style={{
                    borderRadius: "5px",
                    background: "rgba(255, 255, 255, 0)",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    border: "1px solid white",
                  }}
                  type="search"
                  className="me-2"
                  placeholder={"Buscar Dispositivo"}
                  onChange={BuscarDispositivo}
                ></input>
              </div>
              <div
                className="col-3"
                style={{
                  paddingBottom: "20px",
                }}
              >
                <select
                  defaultValue="Seleccionar"
                  className="form-select form-select-lg text-center"
                  style={{
                    borderRadius: "5px",
                    background: "rgba(255, 255, 255, 0)",
                    color: "white",
                    border: "1px solid white",
                  }}
                  onChange={BuscarDispositivo_Estado}
                >
                  <option
                    value="Seleccionar"
                    style={{ background: "rgba(0, 0, 0, 0.7)" }}
                  >
                    - - - -Seleccione- - - -
                  </option>
                  <option
                    style={{ background: "rgba(0, 0, 0, 0.7)" }}
                    value="ACTIVO"
                  >
                    ACTIVO
                  </option>
                  <option
                    style={{ background: "rgba(0, 0, 0, 0.7)" }}
                    value="INACTIVO"
                  >
                    INACTIVO
                  </option>
                </select>
              </div>

              <div
                className="col-3 "
                style={{
                  paddingBottom: "20px",
                }}
              >
                {able && (
                  <button
                    className="btn btn-outline-info"
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      height: "100%",
                      color: "white",
                      border: "1px solid white",
                    }}
                    onClick={() => setShowRegistrarDispositivo(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill-add"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>{" "}
                    Registrar Dispositivo
                  </button>
                )}
              </div>

              <div
                className="col-3 "
                style={{
                  paddingBottom: "20px",
                }}
              >
                <button
                  className="btn btn-outline-info"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    border: "1px solid white",
                  }}
                  onClick={() =>
                    navegation("/admin/gestion/dispositivos/mediciones")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock-history"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                  </svg>{" "}
                  Ver Todas Las Mediciones
                </button>
              </div>
              <table
                style={{
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0)",
                  color: "white",
                  border: "1px solid white",
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr
                    style={{
                      fontSize: "16px",
                      borderBottom: "2px solid white",
                    }}
                  >
                    <th>ZONA</th>
                    <th>LATITUD</th>
                    <th>LONGITUD</th>
                    <th>ESTADO</th>
                    <th>MEDICIÓN UV</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {dispositivosFiltrados.map((device) => (
                    <tr
                      key={device.external_id}
                      style={{
                        borderBottom: "1px solid white",
                        borderRight: "1px solid white",
                        background: device.estado ? "#71b37147" : "#b3717147",
                      }}
                    >
                      <td style={{ padding: "5px" }}>
                        {device.nombre.toUpperCase()}
                      </td>
                      <td style={{ padding: "5px" }}>{device.latitud}</td>
                      <td style={{ padding: "5px" }}> {device.longitud}</td>
                      <td style={{ padding: "5px" }}>
                        {device.estado ? "Activo" : "Inactivo"}
                      </td>
                      <td>
                        {device.medicion.length > 0
                          ? device.medicion[device.medicion.length - 1].uv
                          : "0"}
                      </td>
                      <td style={{ padding: "5px" }}>
                        <button
                          className="btn btn-outline-light"
                          onClick={() =>
                            navegation(
                              "/admin/gestion/dispositivos/mediciones",
                              { state: device }
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-clock-history"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                          </svg>{" "}
                          Mediciones
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>

      <Modal
        show={showRegistrarDispositivo}
        onHide={() => setShowRegistrarDispositivo(false)}
        style={{ "--bs-modal-width": "40%" }}
        keyboard={false}
      >
        <RegistrarDispositivo setShow={setShowRegistrarDispositivo} />
      </Modal>
      <Modal
        show={showEditarDispositivo}
        onHide={() => setShowEditarDispositivo(false)}
        style={{ "--bs-modal-width": "40%" }}
        keyboard={false}
      >
        <EditarDispositivo
          setShow={setShowEditarDispositivo}
          dispositivo={dispositivoSeleccionado}
        />
      </Modal>
    </>
  );
};

export default Devices;
