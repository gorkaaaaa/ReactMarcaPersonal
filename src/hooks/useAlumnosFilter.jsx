import { useEffect, useState } from "react";
import useAlumnos from "./useAlumnos";

const useAlumnosFilter=()=>{
    const alumnos = useAlumnos();

    const [listaAlumnos, setListaAlumnos] = useState([]);
    const [listaAlumnosFiltrada, setListaAlumnosFiltrada] = useState([]);
    
    function crearListas() {
      if (!alumnos.buscando) {
        setListaAlumnos(alumnos.alumnos);
        setListaAlumnosFiltrada(alumnos.alumnos);
      }
    }
    
    function filtrarLista(competenciaId) {
        if (competenciaId.length == 0) {
          setListaAlumnosFiltrada(listaAlumnos);
        } else {
          const alumnosArray = [];
          listaAlumnos.forEach((alumno) => {
            for (let i = 0; i < competenciaId.length; i++) {
              for (let n = 0; n < alumno.competencias.length; n++) {
                if (alumno.competencias[n].id == competenciaId[i]) {
                  if (!alumnosArray.includes(alumno)) {
                    alumnosArray.push(alumno);
                  }
                }
              }
            }
          });
          setListaAlumnosFiltrada(alumnosArray);
        }
      }
    
    useEffect(crearListas, alumnos.alumnos);

    return{listaAlumnosFiltrada, filtrarLista}
}
export default useAlumnosFilter