import { useContext } from "react";
import { Link } from "react-router-dom";
import IdiomaContext from "../../contextos/IdiomaContexto";

const Cuerpo = () => {
  const idiomaContext = useContext(IdiomaContext);
  return (
    <div>
      <h1>{idiomaContext.empresas}</h1>
      <Link to="/empresa">
        <button>
          <img src="src\assets\empresa.jpg"></img>
        </button>
      </Link>
      <h1>{idiomaContext.centro}</h1>
      <Link to="/centroeducativo">
        <button>
          <img src="src\assets\centro.jpg"></img>
        </button>
      </Link>
      <h1>{idiomaContext.alumnos}</h1>
      <Link to="/alumno">
        <button>
          <img src="src\assets\alumno.jpg"></img>
        </button>
      </Link>
    </div>
  );
};
export default Cuerpo;
