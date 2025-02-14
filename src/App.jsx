import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";
import Inicio from "./paginas/Inicio";
import { useState } from "react";
import IdiomaContext from "./contextos/IdiomaContexto";
import idioma from "./mocks/idioma";
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
        </Routes>
      </IdiomaContext.Provider>
    </>
  );
}

export default App;
