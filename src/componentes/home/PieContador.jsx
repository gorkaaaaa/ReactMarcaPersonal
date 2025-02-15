import { useContext } from "react";
import IdiomaContext from "../../contextos/IdiomaContexto";

const PieContador = () => {
  const idiomaContext = useContext(IdiomaContext);
  return (
    <div>
      <div>
        <h3>{idiomaContext.empresas}</h3>
        <h1>0</h1>
      </div>
      <div>
        <h3>{idiomaContext.proyectos}</h3>
        <h1>0</h1>
      </div>
      <div>
        <h3>{idiomaContext.alumnos}</h3>
        <h1>0</h1>
      </div>
    </div>
  );
};
export default PieContador;
