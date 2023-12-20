import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ListarTodo } from "./fragment/ListarTodo";
import ActualizarVentanaPersonas from "./fragment/ActualizarVentanaPersonas";
import PageNotFound from "./fragment/tools/PageNotFound";
import PaginaInicio from "./fragment/main/PaginaInicio";

function App() {
  return (
    <Routes>
      <Route path="/b" element={<ListarTodo />} />
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/a" element={<ActualizarVentanaPersonas />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
