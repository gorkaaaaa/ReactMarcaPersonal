import { useContext } from "react";
import { Link } from "react-router-dom";
import IdiomaContext from "../contextos/IdiomaContexto";

const Cuerpo = (props) => {
  const idiomaContext = useContext(IdiomaContext);
  console.log(props);
  return (
    <div>
      <h1>{idiomaContext.empresas}</h1>
      <Link to="/empresas">
        <button>
          <img src="src\assets\empresa.jpg"></img>
        </button>
      </Link>
      <h1>{idiomaContext.centro}</h1>
      <Link to="/centro-educativo">
        <button>
          <img src="src\assets\centro.jpg"></img>
        </button>
      </Link>
      <h1>{idiomaContext.alumnos}</h1>
      <Link to="/alumnos">
        <button>
          <img src="src\assets\alumno.jpg"></img>
        </button>
      </Link>
    </div>
  );
};
export default Cuerpo;
