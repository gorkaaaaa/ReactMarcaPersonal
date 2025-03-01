import { Link } from "react-router-dom";
import "./Cabecera.css";
import logo from "../assets/mp-logoNaranja100.png";
import banderaEs from "../assets/bandera-es.svg";
import banderaUk from "../assets/bandera-uk.svg";

const Cabecera = (props) => {

  // Función que se asociará al onClick de cada banderá y que cambiará el idioma
  // ya que devolverán 'es' o 'uk'

  function selectIdioma(idiomaElegido) {
    props.cambiaIdioma(idiomaElegido);
  }

  return (
    <header className="headerCabecera">
      <nav className="navCabecera">
        <Link to="/">
          <img
            className="logoCabecera"
            src={logo}
          ></img>
        </Link>
        <h1 className="tituloCabecera">MarcapersonalFP</h1>
        <a onClick={() => selectIdioma("es")}>
          <img
            className="banderasCabecera"
            src={banderaEs}
          ></img>
        </a>
        <a onClick={() => selectIdioma("uk")}>
          <img
            className="banderasCabecera"
            src={banderaUk}
          ></img>
        </a>
      </nav>
    </header>
  );
};
export default Cabecera;
