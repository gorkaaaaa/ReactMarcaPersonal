import { useEffect, useState } from "react";
import ProyectoMinCard from "./ProyectoMinCard";
import useProyectos from "../../../hooks/useProyectos";

const ResultBuscarProyect = (props) => {
  console.log(props.listaProyectosFiltrada)
  function listarResultados(proyecto) {
    return <ProyectoMinCard proyecto={proyecto}></ProyectoMinCard>;
  }

  return <div>{props.listaProyectosFiltrada.map(listarResultados)}</div>;
};

export default ResultBuscarProyect;
