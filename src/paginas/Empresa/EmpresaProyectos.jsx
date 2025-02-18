import { useEffect, useState } from "react";
import ListaFamiliasProfesionales from "../../componentes/empresa/empresaProyectos/ListaFamiliasProf";
import MenuEmpresa from "../../componentes/empresa/MenuEmpresa";
import useFamiliasProf from "../../hooks/useFamiliasProf";
import "../../componentes/empresa/empresaProyectos/ListaFamiliasProf.css";
import ResultBuscarProyect from "../../componentes/empresa/empresaProyectos/ResultBuscarProyect";

const EmpresaProyectos = () => {
  const familiasProf = useFamiliasProf();

  const [listaCompleta, setListaCompleta] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  function crearListas() {
    setListaCompleta(familiasProf);
    setListaFiltrada(familiasProf);
  }

  function filtrarLista(familia ) {
    if (!familia) {
      setListaFiltrada(listaCompleta);
    } else {
      const familiaFiltrada = listaFiltrada.filter((familiaAFiltrar) => {
        return familiaAFiltrar.nombre.startsWith(familia);
      });
      setListaFiltrada(familiaFiltrada);
    }
  }

  useEffect(crearListas, familiasProf);

  function listarFamiliasProf(familia) {
    return (
      <ListaFamiliasProfesionales
        familia={familia.nombre}
        id={familia.id}
        filtrarLista={filtrarLista}
      ></ListaFamiliasProfesionales>
    );
  }

  function listarResultados(familia) {
    return <ResultBuscarProyect familia={familia}></ResultBuscarProyect>;
  }

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de proyectos</summary>
        <div className="customCheckBoxHolder">
          {listaCompleta.map(listarFamiliasProf)}
        </div>
      </details>
      <div>{listaFiltrada.map(listarResultados)}</div>
    </div>
  );
};

export default EmpresaProyectos;
