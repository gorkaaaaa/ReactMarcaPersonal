import { useState } from "react";
import { Link } from "react-router-dom";

const Cabecera = (props) => {

  function selectIdioma(idiomaElegido){
    props.cambiaIdioma(idiomaElegido)
  }

  return (
    <nav className="cabecera">
      <Link to="/">
        <button> <img src="src\assets\mp-logoNaranja100.png"></img></button>
      </Link>
      <h1>MarcapersonalFP</h1>
      <button onClick={()=>selectIdioma("es")}>
        <img src="src\assets\bandera-es.svg"></img>
      </button>
      <button onClick={()=>selectIdioma("uk")}>
        <img src="src\assets\bandera-uk.svg"></img>
      </button>
    </nav>
  );
};
export default Cabecera;
