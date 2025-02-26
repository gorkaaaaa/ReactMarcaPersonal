import { useContext } from "react";
import { Link } from "react-router-dom";
import IdiomaContext from "../../contextos/IdiomaContexto";
import './MenuEmpresa.css'

const MenuEmpresa = () => {
  const idiomaContext = useContext(IdiomaContext);

  return (
    <nav className="menuEmpresa">
      <h1 className="tituloEmpresa">[ {idiomaContext.empresas} ]</h1>
      <Link className="linkNav" to="/empresa/proyectos">
        <p >{idiomaContext.proyectos}</p>
      </Link>

      <Link className="linkNav" to="/empresa/alumnos">
        <p >{idiomaContext.alumnos}</p>
      </Link>
    </nav>
  );
};
export default MenuEmpresa;
