import React from "react";

const TokenOption = () => {
  return (
    <div
      className="col-2 justify-content-center btn btn-outline-dark"
      style={{
        scale: "1.2",
        width: "25%",
        padding: "80px",
        color: "white",
        fontFamily: "Arial",
        fontWeight: "bold",
        borderRadius: "20px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="200"
        fill="currentColor"
        className="bi bi-person-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>
      <label style={{ fontSize: "10px", scale: "1.7" }}>
        Gestionar Solicitudes
      </label>
    </div>
  );
};

export default TokenOption;
