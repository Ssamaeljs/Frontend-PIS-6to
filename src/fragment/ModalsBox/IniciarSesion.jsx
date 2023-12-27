import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { POST } from "../../hooks/Conexion";
import mensajes from "../../utilidades/Mensajes";
import { saveToken } from "../../utilidades/Sessionutil";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const IniciarSesion = (props) => {
  const { setShow } = props;

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
        saveToken(info.info.token);
        setShow((prev) => !prev);
      }
    });
  };
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              style={{ width: "100%", height: "100%" }}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-5">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Semaforo_PIS</span>
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
    </MDBContainer>
  );
};

export default IniciarSesion;
