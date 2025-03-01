import AlumnoMinCard from "./AlumnoMinCard";

const ResultBuscarAlumno = (props) => {
  function listarResultados(alumno) {
    return <AlumnoMinCard alumno={alumno}></AlumnoMinCard>;
  }
  return (
    <div className="row">
      {props.listaAlumnosFiltrada.length > 0 ? (
        props.listaAlumnosFiltrada.map(listarResultados)
      ) : (
        <p>No se han encontrado alumnos con esos criterios</p>
      )}
    </div>
  );
};
export default ResultBuscarAlumno;
