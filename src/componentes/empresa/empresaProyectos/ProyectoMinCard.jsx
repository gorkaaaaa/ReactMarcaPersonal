import "./ProyectoMinCard.css";

const ProyectoMinCard = (props) => {
  // Puesto que participantes y ciclos son arrays, los extraigo en dos constantes distintas
  // que posteriormente usaré para mapear
  const participantes = props.proyecto.participantes;
  const ciclos = props.proyecto.ciclos;

  // Funcion para mapear los participantes del proyecto
  function listarParticipantes(participante) {
    return (
      <>
        <p className="mb-2 pb-1">
          {participante.nombre} {participante.apellidos}
        </p>
      </>
    );
  }

  // Funcion para mapear los ciclos a los que pertenece el proyecto
  function listarCiclos(ciclo) {
    return (
      <>
        {ciclo.codCiclo} <br />
      </>
    );
  }
  return (
    <div className="col-3 ">
      <section className="w-100 sectionMinCard">
        <div className="row d-flex">
          <div className="card divCardMinCard">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  className="img-fluid imgMinCard"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="mb-1">{props.proyecto.nombre}</h4>
                <h4>ID:</h4>
                <p className="mb-2 pb-1">{props.proyecto.id}</p>
                <h4>Alumnos:</h4>

                {participantes.map(listarParticipantes)}

                <h4>Tutor: </h4>
                <p className="mb-2 pb-1"> {props.proyecto.docente_id}</p>
                <h4>Ciclos: </h4>
                <p className="mb-2 pb-1"> {ciclos.map(listarCiclos)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProyectoMinCard;
