import "bootstrap/dist/css/bootstrap.min.css";
import UNL_LOGO_2 from "./imgs/UNL_LOGO_2.png";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { POST } from "../../hooks/Conexion";
import mensajes from "../../utilidades/Mensajes";
import { saveToken } from "../../utilidades/Sessionutil";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const IniciarSesion = (props) => {
  const { setShow, dispositivos } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegation = useNavigate();

  const onSubmit = (data) => {
    var datos = {
      correo: data.correo,
      clave: data.clave,
    };

    POST(datos, "iniciar_sesion").then((info) => {
      if (info.code !== 200) {
        mensajes("Correo y/o Contraseña Incorrectos", "error", "Error");
      } else {
        data = {
          user: info.info.user,
          dispositivos: dispositivos,
        };
        setShow((prev) => !prev);
        saveToken(info.info.token);
        if (info.info.user.rol === "ADMINISTRADOR") {
          navegation("/admin", {
            state: data,
            isAdmin: true,
          });
        } else {
          navegation("/", {
            state: data,
          });
        }
      }
    });
  };
  return (
    <MDBCard style={{ border: "none" }}>
      <MDBRow className="g-0">
        <MDBCol md="6">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            style={{ width: "100%", height: "100%" }}
            alt="login form"
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBCardBody className="col">
            <div className="container" style={{ padding: "30px 10px" }}>
              <label
                style={{
                  color: "#212529",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "Arial",
                }}
              >
                <img
                  className="img-fluid"
                  src={UNL_LOGO_2}
                  alt="UNL_LOGO"
                  style={{
                    width: "30%",
                    marginRight: "2px",
                  }}
                />
                SEMAFORO UV
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
              <h5
                className="col-sm-12 text-center mt-5 mb-5"
                style={{ letterSpacing: "1px" }}
              >
                Ingresa a tu cuenta
              </h5>

              <div className="row">
                <FloatingLabel label="Correo Electrónico" className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Correo Electrónico"
                    required
                    {...register("correo", { required: true })}
                  />
                  {errors.correo && errors.correo.type === "required" && (
                    <Form.Control.Feedback type="invalid">
                      Ingresa bien el correo
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
                <FloatingLabel label="Contraseña">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    {...register("clave", { required: true })}
                  />
                </FloatingLabel>
              </div>
              <div className="row">
                <div className="text-center mt-5 mb-2">
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    style={{ width: "150px" }}
                  >
                    Ingresar
                  </Button>
                </div>
                <div className="text-center mt-5 mb-2">
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Quieres ser un Usuario?{" "}
                    <a href="#!" style={{ color: "#393f81" }}>
                      Registrate aquí
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default IniciarSesion;
