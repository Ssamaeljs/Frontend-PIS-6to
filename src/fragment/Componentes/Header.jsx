import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mikeyImage from "./imgs/mikey.jpg";
const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={mikeyImage}
            width="40"
            height="40"
            className="d-inline-block align-text-center rounded-circle"
            style={{
              marginRight: "10px",
            }}
          />
          Perfil
        </a>
      </div>
    </nav>
  );
};

export default Header;
