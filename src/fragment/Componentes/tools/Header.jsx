import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Modal } from "react-bootstrap";
import IniciarSesion from "../../ModalsBox/IniciarSesion";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container className="justify-content-end">
          <Navbar.Brand onClick={() => setShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-fill-lock"
              viewBox="0 0 16 16"
            >
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
            </svg>
            Iniciar Sesión
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="model_box">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          style={{ "--bs-modal-width": "50%" }}
          keyboard={false}
        >
          <Modal.Header closeButton />
          <IniciarSesion setShow={setShow} />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
