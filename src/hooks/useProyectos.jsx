import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([])
    const [buscando, setBuscando] = useState(false)
    
    function obtenerDatos() {

        setBuscando(true)

        getProyectos().then(datos => {

            setProyectos(datos);
            setBuscando(false)
        })
    }
    useEffect(obtenerDatos, []);

    return {proyectos, buscando}
}
export default useProyectos;