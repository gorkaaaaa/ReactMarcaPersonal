import { useEffect, useState } from "react";
import ListaCompetencias from "../../componentes/empresa/empresaAlumnos/ListaCompetencias";
import MenuEmpresa from "../../componentes/empresa/MenuEmpresa";
import ResultBuscarAlumno from "../../componentes/empresa/empresaAlumnos/ResultBuscarAlumno";
import useAlumnosFilter from "../../hooks/useAlumnosFilter";
import ListaFamiliasProfesionales from "../../componentes/empresa/empresaProyectos/ListaFamiliasProf";

const EmpresaAlumnos = () => {

  // Todos los componentes de EmpresaAlumno tienen en esencia el mismo funcionamiento
  // que en EmpresaProyectos, solo que con diferente contenido, ya que cada resultado del fetch
  // devuelve un array con un formato distinto, por lo que no he podido aunar toda la lógica en un mismo sitio
  // pero sí la he reuitilizado
  
  const listaAlumnos=useAlumnosFilter();

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Busca a tus alumnos</summary>
        <p>Filtrar por competencia</p>
        <div className="customCheckBoxHolder">
        <ListaCompetencias
            filtrarLista={listaAlumnos.filtrarLista}
          ></ListaCompetencias>
        </div>
        <p>Filtrar por familia profesional</p>
        <div className="customCheckBoxHolder">
        <ListaFamiliasProfesionales
            filtrarLista={listaAlumnos.filtrarLista}
          ></ListaFamiliasProfesionales>
        </div>
      </details>
      <div>
        <ResultBuscarAlumno listaAlumnosFiltrada={listaAlumnos.listaAlumnosFiltrada}>

        </ResultBuscarAlumno>
      </div>
    </div>
  );
};

export default EmpresaAlumnos;
