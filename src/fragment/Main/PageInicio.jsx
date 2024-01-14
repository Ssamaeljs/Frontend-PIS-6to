import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Componentes/tools/Header";
import { GET } from "../../hooks/Conexion";
import { borrarSesion, getToken } from "../../utilidades/Sessionutil";
import { useEffect, useState } from "react";

import { useLocation } from "react-router";
import ContenedorInicio from "../Contenedores/ContenedorInicio";
import { Spinner } from "react-bootstrap";
const PaginaInicio = () => {
  const props = useLocation();
  if (!props.state) {
    borrarSesion();
  }
  const [llDispositivos, setLlDispositivos] = useState(false);
  const [dispositivos, setDispositivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!llDispositivos) {
      GET("listar/dispositivo", getToken())
        .then((info) => {
          if (info.code !== 200) {
            console.error("Error en la respuesta:", info);
          } else {
            setDispositivos(info.info);
          }
        })
        .catch((error) => {
          setError("Error de Conexión");
        })
        .finally(() => {
          setLlDispositivos(true);
          setLoading(false);
        });
    }
  }, [llDispositivos, setLoading]);

  return (
    <div>
      <section
        className="home"
        style={{
          backgroundPosition: "center",
          boxShadow: "inset 0 100px 50px 4px rgb(0 0 0 / 40%)",
        }}
      >
        {dispositivos.length > 0 && <Header dispositivos={dispositivos} />}

        <div
          className="container text-center"
          style={{
            transform: "translateY(150px)",
            alignItems: "center",
            backgroundColor: "rgba(19, 35, 64, 0.6)",
            borderRadius: "20px",
          }}
        >
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
                Cargando datos...
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
              <ContenedorInicio dispositivos={dispositivos} />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default PaginaInicio;
