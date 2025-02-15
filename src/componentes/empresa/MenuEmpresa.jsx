import { useContext } from "react";
import { Link } from "react-router-dom";
import IdiomaContext from "../../contextos/IdiomaContexto";

const MenuEmpresa = () => {
  const idiomaContext = useContext(IdiomaContext);

  return (
    <nav>
      <h1>{idiomaContext.empresas}</h1>
      <Link to="/empresa/proyectos">
        <a>
          <p>{idiomaContext.proyectos}</p>
        </a>
      </Link>

      <Link to="/empresa/alumnos">
        <a>
          <p>{idiomaContext.alumnos}</p>
        </a>
      </Link>
    </nav>
  );
};
export default MenuEmpresa;
