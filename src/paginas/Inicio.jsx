import { useContext } from "react";
import Cuerpo from "../componentes/home/Cuerpo/Cuerpo";
import Pie from "../componentes/home/Pie/Pie";
import IdiomaContext from "../contextos/IdiomaContexto";

const Inicio = () => {
  return (
    <div>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
    </div>
  );
};
export default Inicio;
