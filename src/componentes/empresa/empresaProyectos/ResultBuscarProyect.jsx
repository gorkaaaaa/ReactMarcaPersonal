import ProyectoMinCard from "./ProyectoMinCard";

const ResultBuscarProyect = (props) => {
  // Función para mapear cada MinCard con el resultado de cada proyecto
  function listarResultados(proyecto) {
    return <ProyectoMinCard proyecto={proyecto}></ProyectoMinCard>;
  }

  return (
    <div className="row">
      <h5>Resultados:</h5>
      {props.listaProyectosFiltrada.length > 0 ? (
        props.listaProyectosFiltrada.map(listarResultados)
      ) : (
        <p>No se han encontrado proyectos con esos criterios</p>
      )}
    </div>
  );
};

export default ResultBuscarProyect;
