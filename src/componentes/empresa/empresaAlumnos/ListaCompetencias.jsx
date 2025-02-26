import { useEffect, useState } from "react";
import "./ListaCompetencias.css";
import { useForm } from "react-hook-form";
import useCompetencias from "../../../hooks/useCompetencias";

const ListaCompetencias = (props) => {
  const competencias = useCompetencias();
  const [listaCompetencias, setListaCompetencias] = useState([]);
  const [listaCompetenciasSelect, setListaCompetenciasSelect]=useState([]);

  function crearLista() {
    if (!competencias.buscando) {
      setListaCompetencias(competencias.competencias);

    }
  }

  const COMPETENCIA = {
    COMPETENCIA: "competencia",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm();

  //Con el watch monitorizamos los cambios en los campos del formulario, igual el de busqueda se podria
  // haber hecho con watch tambien
  const competenciaSelect = watch(COMPETENCIA.COMPETENCIA);


  useEffect(crearLista, competencias.competencias);
  function listarCompetencias(competencia) {
    return (
      <form onChange={mostrarId}>
        <input
          className="customCheckBoxInput"
          id={competencia.id}
          type="checkbox"
          {...register(COMPETENCIA.COMPETENCIA)}
        ></input>
        <label htmlFor={competencia.id} className="customCheckBoxWrapper">
          <div className="customCheckBox">
            <div className="inner">{competencia.nombre}</div>
          </div>
        </label>
      </form>
    );
  }

  function mostrarId(event) {

    if(listaCompetenciasSelect.includes(event.target.id)){
      const listaSinId = listaCompetenciasSelect.filter(id => id !== event.target.id);
      setListaCompetenciasSelect(listaSinId);
      props.filtrarLista(listaSinId);
    }else{
      const listaIds=[...listaCompetenciasSelect, event.target.id]
      setListaCompetenciasSelect(listaIds);
      props.filtrarLista(listaIds);
    }
  }

  return (
    <div className="customCheckBoxHolder">
      {listaCompetencias.map(listarCompetencias)}
    </div>
  );
};
export default ListaCompetencias;
