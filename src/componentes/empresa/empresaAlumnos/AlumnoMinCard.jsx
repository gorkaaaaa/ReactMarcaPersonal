import "./AlumnoMinCard.css";

const AlumnoMinCard = (props) => {
  const idiomas = props.alumno.idiomas;
  const ciclos= props.alumno.ciclos;
  console.log(idiomas);
  function listarIdiomas(idioma) {
    if(idioma.alpha2=='en'){
        return(<img src="../../../../assets/bandera-uk.svg"></img>)
    }
    if(idioma.alpha2=='en'){
        return(<img src="../../../../assets/bandera-uk.svg"></img>)
    }
  }
  function listarCiclos(ciclo) {
    return <p>{ciclo.codCiclo}</p>
  }
  // <p>{props.alumno.id}</p>
  // <p>{props.alumno.name}</p>
  // <p>Perfiles:</p>
  // {idiomas.map(listarIdiomas)}
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
                <h4 class="mb-1">{props.alumno.name}</h4>
                <p class="mb-2 pb-1">
                  <h5>ID:</h5>
                  {props.alumno.id}
                </p>
                <p class="mb-2 pb-1">
                  <h5>Idiomas:</h5> {idiomas.map(listarIdiomas)}
                </p>
                <p class="mb-2 pb-1">
                  <h5>Perfiles: </h5> perfiles
                </p>
                <p class="mb-2 pb-1">
                  <h5>Ciclos: </h5>{ciclos.map(listarCiclos)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AlumnoMinCard;
