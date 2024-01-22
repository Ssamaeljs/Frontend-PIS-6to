import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { POST } from "../../../../../hooks/Conexion";
import { Button, Form } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import mensajes from "../../../../../utilidades/Mensajes";
import { getToken } from "../../../../../utilidades/Sessionutil";

const EditarDispositivo = (props) => {
  const { setShow, dispositivo } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  const estadoCheckbox = watch("estado");
  useEffect(() => {
    setValue("identificador", dispositivo.identificador);
    setValue("latitud", dispositivo.latitud);
    setValue("longitud", dispositivo.longitud);
    setValue("estado", dispositivo.estado);
  }, [dispositivo, setValue]);

  const onSubmit = (data) => {
    const datos = {
      identificador: parseInt(data.identificador),
      latitud: parseFloat(data.latitud),
      longitud: parseFloat(data.longitud),
      estado: data.estado || false,
    };

    POST(datos, `guardar/dispositivo/${dispositivo.external_id}`, getToken())
      .then((info) => {
        if (info.code !== 200) {
          mensajes("Hubo un error en el registro", "error", "Error");
        } else {
          mensajes("Dispositivo editado exitosamente", "success", "Éxito");
          setShow(false);
          setTimeout(() => {
            window.location.reload();
          }, 10);
        }
      })
      .catch(() => {
        mensajes("Hubo un error en el registro", "error", "Error");
      });
  };

  const handleCancelar = () => {
    setShow(false);
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
              <img
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/UNL3.png"
                alt="UNL_LOGO"
                style={{
                  width: "70%",
                  marginRight: "2px",
                  paddingLeft: "90px",
                }}
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
              <h5
                className="col-sm-12 text-center mt-5 mb-5"
                style={{ letterSpacing: "1px" }}
              >
                Datos del Dispositivo
              </h5>

              <div className="row">
                <Form.Group className="mb-4">
                  <Form.Label>Identificador</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Identificador"
                    {...register("identificador", { required: true })}
                    isInvalid={!!errors.identificador}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.identificador?.type === "required" &&
                      "Ingresa el identificador"}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Latitud</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="Latitud"
                    {...register("latitud", { required: true })}
                    isInvalid={!!errors.latitud}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.latitud?.type === "required" &&
                      "Ingresa la latitud"}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Longitud</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="Longitud"
                    {...register("longitud", { required: true })}
                    isInvalid={!!errors.longitud}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.longitud?.type === "required" &&
                      "Ingresa la longitud"}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label={`Estado: ${estadoCheckbox ? "Activo" : "Inactivo"}`}
                    {...register("estado")}
                    onChange={() => {
                      setValue("estado", !estadoCheckbox);
                    }}
                  />
                </Form.Group>

                <div className="text-center mt-5 mb-2">
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    style={{ width: "150px" }}
                    disabled={isSubmitting}
                  >
                    Editar{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="danger"
                    onClick={handleCancelar}
                    style={{ width: "150px" }}
                    disabled={isSubmitting}
                  >
                    Cancelar{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </Button>
                </div>
              </div>
            </form>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default EditarDispositivo;
