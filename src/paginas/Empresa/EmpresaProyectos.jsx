import { useEffect, useState } from "react";
import ListaFamiliasProfesionales from "../../componentes/empresa/empresaProyectos/ListaFamiliasProf";
import MenuEmpresa from "../../componentes/empresa/MenuEmpresa";
import useFamiliasProf from "../../hooks/useFamiliasProf";
import "../../componentes/empresa/empresaProyectos/ListaFamiliasProf.css";
import ResultBuscarProyect from "../../componentes/empresa/empresaProyectos/ResultBuscarProyect";
import useProyectos from "../../hooks/useProyectos";
import useProyectosFilter from "../../hooks/useProyectosFilter";

const EmpresaProyectos = () => {

  const listaProyectos=useProyectosFilter();

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de proyectos</summary>
        <p>Filtrar por familia profesional</p>
        <div>
          <ListaFamiliasProfesionales
            filtrarLista={listaProyectos.filtrarLista}
          ></ListaFamiliasProfesionales>
        </div>
      </details>
      <div>
        <ResultBuscarProyect
          listaProyectosFiltrada={listaProyectos.listaProyectosFiltrada}
        ></ResultBuscarProyect>
      </div>
    </div>
  );
};

export default EmpresaProyectos;
