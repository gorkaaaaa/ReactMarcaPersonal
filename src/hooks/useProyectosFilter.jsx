import { useEffect, useState } from "react";
import useProyectos from "./useProyectos";

const useProyectosFilter=()=>{

    // Constante que almacena el resultado del fetch hecho por el hook useProyectos
    const proyResultado = useProyectos();

    // Listas de proyectos, una donde almacenaremos los proyectos que vamos a mostrar,
    // es decir, los filtrados, y otra que usaremos para regenerar la lista filtrada
    const [listaProyectos, setListaProyectos] = useState([]);
    const [listaProyectosFiltrada, setListaProyectosFiltrada] = useState([]);
    
    // Función que hará el set inicial de ambas listas
    function crearListas() {
      if (!proyResultado.buscando) {
        setListaProyectos(proyResultado.proyectos);
        setListaProyectosFiltrada(proyResultado.proyectos);
      }
    }
    
    // Función que realizará el filtrado de los proyectos
    function filtrarLista(familiasId) {

      // Comprobará si el array de proyectos a filtrar está vacío
      // en cuyo caso regenerará la lista a su estado base
      if (familiasId.length == 0) {
        setListaProyectosFiltrada(listaProyectos);

      } else {

        // Constante que usaremos para que almacene los proyectos que vamos a mostrar
        const proyectosFiltradosArray = [];

        // Recorre el array de proyectos filtrados y por cada familia que esta función haya
        // recibido como array, comprobará cada familia_id que pertenece a cada proyecto
        listaProyectos.forEach((proyecto) => {
          for (let i = 0; i < familiasId.length; i++) {
            for (let n = 0; n < proyecto.ciclos.length; n++) {
              if (proyecto.ciclos[n].familia_id == familiasId[i]) {

                // Y lo insertará en el array en caso de que no exista en el estado de proyectos filtrados
                if (!proyectosFiltradosArray.includes(proyecto)) {
                  proyectosFiltradosArray.push(proyecto);
                }
              }
            }
          }
        });
        // Finalmente hace el set al estado de proyectos filtrados
        setListaProyectosFiltrada(proyectosFiltradosArray);
      }
    }
    
    // Ejecuto la creación de la lista cada vez que .proyectos cambia para asegurarme de que se
    // han cargado todos
    useEffect(crearListas, proyResultado.proyectos);

    // Devuelvo tanto el estado con los proyectos filtrados como la función que los filtra
    return {listaProyectosFiltrada, filtrarLista}
}
export default useProyectosFilter