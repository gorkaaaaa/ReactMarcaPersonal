import { useEffect, useState } from "react";
import useProyectos from "./useProyectos";

const useProyectosFilter=()=>{
    const proyResultado = useProyectos();
    const [listaProyectos, setListaProyectos] = useState([]);
    const [listaProyectosFiltrada, setListaProyectosFiltrada] = useState([]);
    
    function crearListas() {
    
      if (!proyResultado.buscando) {
        setListaProyectos(proyResultado.proyectos);
        setListaProyectosFiltrada(proyResultado.proyectos);
      }
    }
    
    function filtrarLista(familiasId) {
      if (familiasId.length == 0) {
        setListaProyectosFiltrada(listaProyectos);
      } else {
        const proyectosFiltradosArray = [];
        listaProyectosFiltrada.forEach((proyecto) => {
          for (let i = 0; i < familiasId.length; i++) {
            for (let n = 0; n < proyecto.ciclos.length; n++) {
              if (proyecto.ciclos[n].familia_id == familiasId[i]) {
                if (!proyectosFiltradosArray.includes(proyecto)) {
                  proyectosFiltradosArray.push(proyecto);
                }
              }
            }
          }
        });
        setListaProyectosFiltrada(proyectosFiltradosArray);
      }
    }
    
    useEffect(crearListas, proyResultado.proyectos);

    return {listaProyectosFiltrada, filtrarLista}
}
export default useProyectosFilter