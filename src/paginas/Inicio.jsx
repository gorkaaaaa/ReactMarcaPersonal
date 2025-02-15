import { useContext } from "react";
import Cuerpo from "../componentes/home/Cuerpo";
import Pie from "../componentes/home/Pie";
import IdiomaContext from "../contextos/IdiomaContexto";

const Inicio = () => {
  const idiomaContext = useContext(IdiomaContext);
  console.log(idiomaContext);
  return (
    <div>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
    </div>
  );
};
export default Inicio;
