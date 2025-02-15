import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";
import Inicio from "./paginas/Inicio";
import { useState } from "react";
import IdiomaContext from "./contextos/IdiomaContexto";
import idioma from "./mocks/idioma";
import Empresas from "./paginas/Empresas/Empresas";
import CentroEducativo from "./paginas/CentroEducativo";
import Alumnos from "./paginas/Alumnos";
import EmpresaProyectos from "./paginas/Empresas/EmpresaProyectos";
import EmpresaAlumnos from "./paginas/Empresas/EmpresaAlumnos";

function App() {
  const [idiomaPagina, setIdiomaPagina] = useState(idioma.es);

  function cambiaIdioma(idiomaElegido) {
    setIdiomaPagina(idioma[idiomaElegido]);
  }

  return (
    <>
      <Cabecera cambiaIdioma={cambiaIdioma}></Cabecera>
      <IdiomaContext.Provider value={idiomaPagina}>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/empresa" element={<Empresas></Empresas>}></Route>
          <Route path="/empresa/proyectos" element={<EmpresaProyectos></EmpresaProyectos>}></Route>
          <Route path="/empresa/alumnos" element={<EmpresaAlumnos></EmpresaAlumnos>}></Route>
          <Route
            path="/centroeducativo"
            element={<CentroEducativo></CentroEducativo>}
          ></Route>
          <Route path="/alumno" element={<Alumnos></Alumnos>}></Route>
        </Routes>
      </IdiomaContext.Provider>
    </>
  );
}

export default App;
