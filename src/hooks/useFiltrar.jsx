import { useEffect, useState } from "react";

const useFiltrar = (elementos) => {
  const [lista, setLista] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);

  function crearListas() {
    setLista(elementos);
    setListaFiltrada(elementos);
  }

  useEffect(crearListas, []);

  function filtrarListaProyectos(proyectoId) {
    if (!proyectoId) {
      setListaFiltrada(lista);
    } else {
      const listaNuevaArray = [];
      listaFiltrada.forEach((proyecto) => {
        for (let i = 0; i < proyecto.ciclos.length; i++) {
          if (proyecto.ciclos[i].familia_id == proyectoId) {
            listaNuevaArray.push(proyecto);
          }
        }
      });
      console.log(listaNuevaArray);
      setListaFiltrada(listaNuevaArray);
      console.log("estado", listaFiltrada);
    }
  }
  return { listaFiltrada, filtrarListaProyectos };
};
export default useFiltrar;
