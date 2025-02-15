import { useContext } from "react";
import PieContador from "./PieContador";
import IdiomaContext from "../../contextos/IdiomaContexto";
const Pie = () => {
  const idiomaContext = useContext(IdiomaContext);
  return (
    <footer>
      <PieContador></PieContador>
      <div>
        <a href="https://cifpcarlos3.es/es">CIFP Carlos III</a>
        <p>
          C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301
        </p>
      </div>
      <div>
        <a href="https://www.facebook.com/cifpcarlos3">
          <img src="src\assets\facebook.svg"></img>
        </a>
        <a href="https://twitter.com/cifpcarlos3">
          <img src="src\assets\twitter.svg"></img>
        </a>
        <a href="https://www.instagram.com/cifpcarlos3/">
          <img src="src\assets\instagram.svg"></img>
        </a>
        <a href="https://www.tiktok.com/@cifpcarlos3">
          <img src="src\assets\tiktok.svg"></img>
        </a>
        <a href="https://www.youtube.com/c/cifpcarlosiiicartagena">
          <img src="src\assets\youtube.svg"></img>
        </a>
      </div>
      <div>
        <img src="src\assets\mp-logoReves.png"></img>
        <h4>Marca Personal FP</h4>
        <p>{idiomaContext.grado} CFGS Desarrollo de aplicaciones web 2024</p>
      </div>
    </footer>
  );
};
export default Pie;
