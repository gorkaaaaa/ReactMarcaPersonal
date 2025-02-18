import { useContext } from "react";
import IdiomaContext from "../../../contextos/IdiomaContexto";
import './PieContador.css'
import useCount from "../../../hooks/useCount";

const PieContador = () => {
  const idiomaContext = useContext(IdiomaContext);
  const contador=useCount();
  return (
    <div className="divPpalContador">
      <div className="divContador">
        <p className="parrafoNombre">{idiomaContext.empresas}</p>
        <p className="parrafoContador">{contador.count.empresas}</p>
      </div>
      <div className="divContador">
        <p className="parrafoNombre">{idiomaContext.proyectos}</p>
        <p className="parrafoContador">{contador.count.proyectos}</p>
      </div>
      <div className="divContador">
        <p className="parrafoNombre">{idiomaContext.alumnos}</p>
        <p className="parrafoContador">{contador.count.alumnos}</p>
      </div>
    </div>
  );
};
export default PieContador;
