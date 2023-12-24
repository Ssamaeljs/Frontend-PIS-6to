import React from "react";
import { estaSesion } from "./Sessionutil";
import { Navigate } from "react-router";

export const MiddlewareSesion = ({ children }) => {
  const autenticado = estaSesion();
  if (autenticado) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
