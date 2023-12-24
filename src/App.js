import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ListarTodo } from "./fragment/ListarTodo";
import ActualizarVentanaPersonas from "./fragment/ActualizarVentanaPersonas";
import PageNotFound from "./fragment/tools/PageNotFound";
import PaginaInicio from "./fragment/main/PaginaInicio";
import { MiddlewareSesion } from "./utilidades/Middleware";
function App() {
  return (
    <Routes>
      <Route
        path="/b"
        element={
          <MiddlewareSesion>
            <ListarTodo />
          </MiddlewareSesion>
        }
      />
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/a" element={<ActualizarVentanaPersonas />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
