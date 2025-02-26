import ProyectoMinCard from "./ProyectoMinCard";


const ResultBuscarProyect = (props) => {
  function listarResultados(proyecto) {
    return <ProyectoMinCard proyecto={proyecto}></ProyectoMinCard>;
  }

  return (
    <div className="row">
      <h5>Resultados:</h5>
      {props.listaProyectosFiltrada.map(listarResultados)}
    </div>
  );
};

export default ResultBuscarProyect;
