import { useEffect, useState } from "react";
import { getFamiliasProf } from "../servicios/getFamiliasProf";

const useFamiliasProf = () => {

    const [familiasProf, setFamiliasProf] = useState([])
    
    function obtenerDatos() {

        getFamiliasProf().then(datos => {

            setFamiliasProf(datos);
        })
    }
    useEffect(obtenerDatos, []);

    return familiasProf
}
export default useFamiliasProf;