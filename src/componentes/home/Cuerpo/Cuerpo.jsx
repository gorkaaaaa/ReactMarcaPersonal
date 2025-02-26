import { useContext } from "react";
import { Link } from "react-router-dom";
import IdiomaContext from "../../../contextos/IdiomaContexto";
import "./Cuerpo.css";

const Cuerpo = () => {

  // Constante que almacenará el contexto elegido en la cabecera para luego usarlo en
  // las distintas partes de la página

  const idiomaContext = useContext(IdiomaContext);

  return (
    <div className="divImagenes">
      <div className="imagenCuerpo">
        <Link to="/empresa">
          <img src="src/assets/empresa.jpg" alt="Empresa" />
          <div className="overlay">{idiomaContext.empresas}</div>
        </Link>
      </div>

      <div className="imagenCuerpo">
        <Link to="/centroeducativo">
          <img src="src/assets/centro.jpg" alt="Centro Educativo" />
          <div className="overlay">{idiomaContext.centro}</div>
        </Link>
      </div>

      <div className="imagenCuerpo">
        <Link to="/alumno">
          <img src="src/assets/alumno.jpg" alt="Alumnos" />
          <div className="overlay">{idiomaContext.alumnos}</div>
        </Link>
      </div>
    </div>
  );
};
export default Cuerpo;
