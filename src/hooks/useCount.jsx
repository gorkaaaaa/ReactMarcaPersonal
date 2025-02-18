import { useEffect, useState } from "react";
import { getCounts } from "../servicios/getCount";

const useCount = () => {

    const [count, setCount] = useState({empresas: 0, 
                                        proyectos: 0, 
                                        alumnos: 0})

    function obtenerDatos() {

        getCounts().then(datos => {

            setCount({...count, 
                empresas: datos.empresasCount,
                proyectos: datos.proyectosCount,
                alumnos: datos.alumnosCount
            });
        })
    }
    useEffect(obtenerDatos, []);
    

    return {count}    
}
export default useCount;