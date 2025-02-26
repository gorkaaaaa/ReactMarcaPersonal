import { useEffect, useState } from "react";
import { getCompetencias } from "../servicios/getCompetencias";

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState([])
    const [buscando, setBuscando] = useState(false)
    
    function obtenerDatos() {

        setBuscando(true)

        getCompetencias().then(datos => {

            setCompetencias(datos);
            setBuscando(false)
        })
    }
    useEffect(obtenerDatos, []);

    return {competencias, buscando}
}
export default useCompetencias;