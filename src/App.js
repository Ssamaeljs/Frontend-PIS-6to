import "./App.css";

import { Route, Routes } from "react-router-dom";
import PageNotFound from "./fragment/Componentes/tools/PageNotFound";
import PaginaInicio from "./fragment/Main/PageInicio";
import { MiddlewareSesion } from "./utilidades/Middleware";
import PageInicioAdmin from "./fragment/Main/PageAdmin/PageInicioAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route
        path="/admin"
        element={
          <MiddlewareSesion>
            <PageInicioAdmin />
          </MiddlewareSesion>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
