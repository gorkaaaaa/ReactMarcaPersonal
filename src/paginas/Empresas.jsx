import { useContext } from "react";
import IdiomaContext from "../contextos/IdiomaContexto";

const Empresas = () => {
  const idiomaContext = useContext(IdiomaContext);
  return <p>{idiomaContext.empresas}</p>;
};
export default Empresas;
