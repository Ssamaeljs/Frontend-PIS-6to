import "./App.css";

import { Route, Routes } from "react-router-dom";
import PageNotFound from "./fragment/Componentes/tools/PageNotFound";
import PaginaInicio from "./fragment/Main/PageInicio";
import { MiddlewareSesion } from "./utilidades/Middleware";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
