import { useContext } from "react";
import IdiomaContext from "../contextos/IdiomaContexto";

const CentroEducativo = () => {
  const idiomaContext = useContext(IdiomaContext);
  return <p>{idiomaContext.centro}</p>;
};
export default CentroEducativo;
