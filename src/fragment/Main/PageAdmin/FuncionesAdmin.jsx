import React from "react";
import UserOption from "./Gestionar Usuario/UserOption";
import TokenOption from "./Gestionar Tokens/TokenOption";
import DeviceOption from "./Gestionar Dispositivos/DeviceOption";
<<<<<<< HEAD
import AdminOption from "./Configuracion/AdminOption";
=======
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2

const FuncionesAdmin = (props) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-5">
          <h1
            style={{
              color: "white",
              fontSize: "48px",
              fontFamily: "Arial",
              fontWeight: "600",
              borderBottom: "3px solid #e20613",
            }}
          >
<<<<<<< HEAD
            {props.configuracion ? "Configuración" : "Gestionar"}
=======
            Gestionar
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
          </h1>
        </div>
      </div>

      <div
<<<<<<< HEAD
        className={
          props.configuracion
            ? "row justify-content-center"
            : "row justify-content-between"
        }
=======
        className="row justify-content-between "
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
        style={{
          padding: "100px",
          alignItems: "center",
        }}
      >
<<<<<<< HEAD
        {!props.configuracion ? (
          <>
            <UserOption user={props.user} />
            <DeviceOption user={props.user} />
            <TokenOption user={props.user} />
          </>
        ) : (
          <AdminOption user={props.user} />
        )}
=======
        <UserOption user={props.user} />
        <DeviceOption user={props.user} />
        <TokenOption user={props.user} />
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
      </div>
    </>
  );
};
export default FuncionesAdmin;
