import { useEffect, useState } from "react";
import { getFamiliasProf } from "../servicios/getFamiliasProf";

const useFamiliasProf = () => {

    const [familiasProf, setFamiliasProf] = useState([])
    const [buscando, setBuscando] = useState(false)
    
    function obtenerDatos() {

        setBuscando(true)

        getFamiliasProf().then(datos => {

            setFamiliasProf(datos);
            setBuscando(false)
        })
    }
    useEffect(obtenerDatos, []);

    return {familiasProf, buscando}
}
export default useFamiliasProf;