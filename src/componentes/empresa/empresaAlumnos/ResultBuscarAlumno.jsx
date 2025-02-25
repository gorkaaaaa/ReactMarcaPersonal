import AlumnoMinCard from "./AlumnoMinCard";

const ResultBuscarAlumno=(props)=>{
    function listarResultados(alumno) {
        return <AlumnoMinCard alumno={alumno}></AlumnoMinCard>;
      }
    return(
        <div>
            {props.listaAlumnosFiltrada.map(listarResultados)}
        </div>
    )
}
export default ResultBuscarAlumno;