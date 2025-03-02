import "./AlumnoMinCard.css";
import banderaEs from "../../../assets/bandera-es.svg";
import banderaUk from "../../../assets/bandera-uk.svg";
import banderaFr from "../../../assets/bandera-fr.jpg";

const AlumnoMinCard = (props) => {
  const idiomas = props.alumno.idiomas;
  const ciclos = props.alumno.ciclos;
  console.log(idiomas);
  function listarIdiomas(idioma) {
    return (
      <div className="idiomaBloque">
        {idioma.alpha2 === "en" && (
          <img className="banderaIdioma" src={banderaUk} alt="UK" />
        )}
        {idioma.alpha2 === "es" && (
          <img className="banderaIdioma" src={banderaEs} alt="ES" />
        )}
        {idioma.alpha2 === "fr" && (
          <img className="banderaIdiomaFr" src={banderaFr} alt="FR" />
        )}
        {!(idioma.alpha2 === "en" || idioma.alpha2 === "es" || idioma.alpha2 === "fr") && (
          <p>SC</p>
        )}
        <p className="idiomaNivel">{idioma.nivel}</p>
        {idioma.certificado === 1 ? (
          <p className="cert">C</p>
        ) : idioma.certificado === 0 ? (
          <p className="cert">SC</p>
        ) : null}
        <br></br>
      </div>
    );
  }
  function listarCiclos(ciclo) {
    return <p className="mb-2 pb-1">{ciclo.codCiclo}</p>;
  }

  return (
    <div className="col-3 " key={props.alumno.id}>
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
                <h4 className="mb-1">{props.alumno.nombre}</h4>
                <h4 className="mb-1">{props.alumno.apellidos}</h4>
                <h4>ID:</h4>
                <p className="mb-2 pb-1">{props.alumno.id}</p>
                <h4>Idiomas:</h4>
                {idiomas.map(listarIdiomas)}
                <h4 className="mt-3">Perfiles: </h4>
                <p className="mb-2 pb-1">Perfiles</p>
                <h4>Ciclos: </h4>
                {ciclos.map(listarCiclos)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AlumnoMinCard;
