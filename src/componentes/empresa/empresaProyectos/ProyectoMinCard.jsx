import "./ProyectoMinCard.css";

const ProyectoMinCard = (props) => {

  // Puesto que participantes y ciclos son arrays, los extraigo en dos constantes distintas
  // que posteriormente usaré para mapear
  const participantes = props.proyecto.participantes;
  const ciclos = props.proyecto.ciclos;

  // Funcion para mapear los participantes del proyecto
  function listarParticipantes(participante) {
    return <>{participante.name}<br/> </>;
  }

  // Funcion para mapear los ciclos a los que pertenece el proyecto
  function listarCiclos(ciclo) {
    return (
      <>
        {ciclo.nombre}, {ciclo.codCiclo} <br />
      </>
    );
  }
  return (
    <div className="col-3 ">
      <section class="w-100 sectionMinCard">
        <div class="row d-flex">
         
            <div class="card divCardMinCard">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    class="img-fluid imgMinCard"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4 class="mb-1">{props.proyecto.nombre}</h4>
                  <p class="mb-2 pb-1"><h5>ID:</h5>{props.proyecto.id}</p>
                  <p class="mb-2 pb-1">
                    <h5>Alumnos:</h5> {participantes.map(listarParticipantes)}
                  </p>
                  <p class="mb-2 pb-1"><h5>Tutor: </h5> {props.proyecto.docente_id}</p>
                  <p class="mb-2 pb-1"><h5>Ciclos: </h5> {ciclos.map(listarCiclos)}</p>
                </div>
              </div>
            </div>
          
        </div>
      </section>
    </div>
  );
};
export default ProyectoMinCard;
