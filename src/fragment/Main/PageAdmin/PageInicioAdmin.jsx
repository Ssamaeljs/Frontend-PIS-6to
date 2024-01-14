import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Componentes/tools/Header";
import { useLocation } from "react-router";
import ContenedorInicio from "../../Contenedores/ContenedorInicio";
import FuncionesAdmin from "./FuncionesAdmin";
import Usuarios from "./Gestionar Usuario/Usuarios";
const PaginaInicioAdmin = () => {
  const location_props = useLocation();
  const dispositivos = location_props.state.dispositivos;
  const user = location_props.state.user;

  function obtener_componente() {
    switch (location_props.pathname) {
      case "/admin":
        return <ContenedorInicio dispositivos={dispositivos} />;
        break;
      case "/admin/gestion":
        return <FuncionesAdmin dispositivos={dispositivos} user={user} />;
        break;
      case "/admin/gestion/usuarios":
        return <Usuarios dispositivos={dispositivos} user={user} />;
        break;
      default:
        break;
    }
  }
  return (
    <>
      <section
        className="home"
        style={{
          backgroundPosition: "center",
          boxShadow: "inset 0 100px 50px 4px rgb(0 0 0 / 40%)",
        }}
      >
        <Header isAdmin={true} user={user} dispositivos={dispositivos} />
        <>
          <div
            className="container text-center"
            style={{
              transform: "translateY(150px)",
              alignItems: "center",
              backgroundColor: "rgba(19, 35, 64, 0.6)",
              borderRadius: "20px",
            }}
          >
            {obtener_componente()}
          </div>
        </>
      </section>
    </>
  );
};

export default PaginaInicioAdmin;
