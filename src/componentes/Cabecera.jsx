import { Link } from "react-router-dom";
import "./Cabecera.css";

const Cabecera = (props) => {
  function selectIdioma(idiomaElegido) {
    props.cambiaIdioma(idiomaElegido);
  }

  return (
    <header className="headerCabecera">
      <nav className="navCabecera">
        <Link to="/">
          <img
            className="logoCabecera"
            src="src\assets\mp-logoNaranja100.png"
          ></img>
        </Link>
        <h1 className="tituloCabecera">MarcapersonalFP</h1>
        <a onClick={() => selectIdioma("es")}>
          <img
            className="banderasCabecera"
            src="src\assets\bandera-es.svg"
          ></img>
        </a>
        <a onClick={() => selectIdioma("uk")}>
          <img
            className="banderasCabecera"
            src="src\assets\bandera-uk.svg"
          ></img>
        </a>
      </nav>
    </header>
  );
};
export default Cabecera;
