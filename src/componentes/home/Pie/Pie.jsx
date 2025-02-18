import { useContext } from "react";
import PieContador from "./PieContador";
import IdiomaContext from "../../../contextos/IdiomaContexto";
import './Pie.css'

const Pie = () => {
  const idiomaContext = useContext(IdiomaContext);
  return (
    <footer >
      <PieContador></PieContador>
      <div className="divLinkCentro">
        <a className="linkCentro" href="https://cifpcarlos3.es/es">CIFP Carlos III</a>
        <p className="direccionCentro">
          C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301
        </p>
      </div>
      <div className="redesSociales">
        <a href="https://www.facebook.com/cifpcarlos3">
          <img className="logoRedes" src="src\assets\facebook.svg"></img>
        </a>
        <a href="https://twitter.com/cifpcarlos3">
          <img className="logoRedes" src="src\assets\twitter.svg"></img>
        </a>
        <a href="https://www.instagram.com/cifpcarlos3/">
          <img className="logoRedes" src="src\assets\instagram.svg"></img>
        </a>
        <a href="https://www.tiktok.com/@cifpcarlos3">
          <img className="logoRedes" src="src\assets\tiktok.svg"></img>
        </a>
        <a href="https://www.youtube.com/c/cifpcarlosiiicartagena">
          <img className="logoRedes" src="src\assets\youtube.svg"></img>
        </a>
      </div>
      <div className="infoAdicional">
        <img className="logoFooter" src="src\assets\mp-logoReves.png"></img>
        <p className="nombrePagina">Marca Personal FP |</p>
        <p className="nombreGrado">{idiomaContext.grado} | CFGS Desarrollo de aplicaciones web 2024</p>
      </div>
    </footer>
  );
};
export default Pie;
