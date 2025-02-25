import { useEffect, useState } from "react";
import ListaCompetencias from "../../componentes/empresa/empresaAlumnos/ListaCompetencias";
import MenuEmpresa from "../../componentes/empresa/MenuEmpresa";
import useCompetencias from "../../hooks/useCompetencias";
import useAlumnos from "../../hooks/useAlumnos";
import ResultBuscarAlumno from "../../componentes/empresa/empresaAlumnos/ResultBuscarAlumno";

const EmpresaAlumnos = () => {
  const competencias = useCompetencias();
  const alumnos = useAlumnos();

  //   console.log("alumnos", alumnos);
  const [listaCompetencias, setListaCompetencias] = useState([]);
  const [listaAlumnos, setListaAlumnos] = useState([]);
  const [listaAlumnosFiltrada, setListaAlumnosFiltrada] = useState([]);

  function crearListas() {
    if (!competencias.buscando) {
      setListaCompetencias(competencias.competencias);
    }
    if (!alumnos.buscando) {
      setListaAlumnos(alumnos.alumnos);
      setListaAlumnosFiltrada(alumnos.alumnos);
    }
  }

  function listarCompetencias(competencia) {
    return (
      <ListaCompetencias
        competencia={competencia.nombre}
        id={competencia.id}
        filtrarLista={filtrarLista}
      ></ListaCompetencias>
    );
  }

  function filtrarLista(competenciaId) {
    // console.log(competenciaId)
    if (!competenciaId) {
      setListaAlumnosFiltrada(listaAlumnos);
    } else {
      const alumnosArray = [];
      listaAlumnosFiltrada.forEach((alumno) => {
        console.log(alumno);
        for (let i = 0; i < alumno.competencias.length; i++) {
            console.log(alumno.competencias[i].id)
          if (alumno.competencias[i].id == competenciaId) {
            alumnosArray.push(alumno);
          }
        }
      });
         console.log("array",alumnosArray);
      setListaAlumnosFiltrada(alumnosArray);
      console.log("estado", listaAlumnosFiltrada)
    }
  }

  //    console.log(competencias);
  //    alumnos.alumnos.forEach((alumno) => {
  //      console.log("e",alumno.competencias);
  //    });
  useEffect(crearListas, competencias.competencias);

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de competencias</summary>
        <p>Filtrar por competencia</p>
        <div className="customCheckBoxHolder">
          {listaCompetencias.map(listarCompetencias)}
        </div>
      </details>
      <div>
        <ResultBuscarAlumno listaAlumnosFiltrada={listaAlumnosFiltrada}>

        </ResultBuscarAlumno>
      </div>
    </div>
  );
};

export default EmpresaAlumnos;
