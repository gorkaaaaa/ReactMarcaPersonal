import { useEffect, useState } from "react";
import { getAlumnos } from "../servicios/getAlumnos";

const useAlumnos = () => {

    const [alumnos, setAlumnos] = useState([])
    const [buscando, setBuscando] = useState(false)
    
    function obtenerDatos() {

        setBuscando(true)

        getAlumnos().then(datos => {

            setAlumnos(datos);
            setBuscando(false)
        })
    }
    useEffect(obtenerDatos, []);

    return {alumnos, buscando}
}
export default useAlumnos;