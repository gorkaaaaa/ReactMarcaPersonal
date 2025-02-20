import { useEffect, useState } from "react";
import ListaFamiliasProfesionales from "../../componentes/empresa/empresaProyectos/ListaFamiliasProf";
import MenuEmpresa from "../../componentes/empresa/MenuEmpresa";
import useFamiliasProf from "../../hooks/useFamiliasProf";
import "../../componentes/empresa/empresaProyectos/ListaFamiliasProf.css";
import ResultBuscarProyect from "../../componentes/empresa/empresaProyectos/ResultBuscarProyect";
import useProyectos from "../../hooks/useProyectos";

const EmpresaProyectos = () => {
  const familiasProf = useFamiliasProf();
  const proyResultado = useProyectos();

  const [listaFamilias, setListaFamilias] = useState([]);
  const [listaProyectos, setListaProyectos] = useState([]);
  const [listaProyectosFiltrada, setListaProyectosFiltrada] = useState([]);

  function crearListas() {
    if (!familiasProf.buscando) {
      setListaFamilias(familiasProf.familiasProf);
    }
    if (!proyResultado.buscando) {
      setListaProyectos(proyResultado.proyectos);
      setListaProyectosFiltrada(proyResultado.proyectos);
    }
  }

  function filtrarLista(familiaId) {
    if (!familiaId) {
      setListaProyectosFiltrada(listaProyectos);
    } else {
      const proyectosFiltradosArray = [];
      listaProyectosFiltrada.forEach((proyecto) => {
        for (let i = 0; i < proyecto.ciclos.length; i++) {
          if (proyecto.ciclos[i].familia_id == familiaId) {
            proyectosFiltradosArray.push(proyecto);
          }
        }
      });
      console.log(proyectosFiltradosArray);
      setListaProyectosFiltrada(proyectosFiltradosArray);
      console.log("estado", listaProyectosFiltrada)
    }
  }

  useEffect(crearListas, familiasProf.familiasProf);

  function listarFamiliasProf(familia) {
    return (
      <ListaFamiliasProfesionales
        familia={familia.nombre}
        id={familia.id}
        filtrarLista={filtrarLista}
      ></ListaFamiliasProfesionales>
    );
  }

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de proyectos</summary>
        <p>Filtrar por familia profesional</p>
        <div className="customCheckBoxHolder">
          {listaFamilias.map(listarFamiliasProf)}
        </div>
      </details>
      <div>
        <ResultBuscarProyect
          listaProyectosFiltrada={listaProyectosFiltrada}
        ></ResultBuscarProyect>
      </div>
    </div>
  );
};

export default EmpresaProyectos;
