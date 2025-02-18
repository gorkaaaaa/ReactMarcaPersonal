import { useContext } from "react";
import IdiomaContext from "../contextos/IdiomaContexto";

const Alumnos = () => {
  const idiomaContext = useContext(IdiomaContext);
  return <p>{idiomaContext.alumnos}</p>;
};
export default Alumnos;
