import { useEffect, useState } from "react";
import "./ListaFamiliasProf.css";
import { useForm } from "react-hook-form";
import useFamiliasProf from "../../../hooks/useFamiliasProf";

const ListaFamiliasProfesionales = (props) => {
  const familiasProf = useFamiliasProf();
  const [listaFamilias, setListaFamilias] = useState([]);
  const [listaFamiliasSelect, setListaFamiliasSelect]=useState([]);

  function crearLista() {
    if (!familiasProf.buscando) {
      setListaFamilias(familiasProf.familiasProf);

    }
  }

  const FAMILIA = {
    FAMILIA: "familia",
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
  const familiaSelect = watch(FAMILIA.FAMILIA);


  useEffect(crearLista, familiasProf.familiasProf);
  function listarFamiliasProf(familia) {
    return (
      <form onChange={mostrarId}>
        <input
          className="customCheckBoxInput"
          id={familia.id}
          type="checkbox"
          {...register(FAMILIA.FAMILIA)}
        ></input>
        <label htmlFor={familia.id} className="customCheckBoxWrapper">
          <div className="customCheckBox">
            <div className="inner">{familia.nombre}</div>
          </div>
        </label>
      </form>
    );
  }

  function mostrarId(event) {

    if(listaFamiliasSelect.includes(event.target.id)){
      const listaSinId = listaFamiliasSelect.filter(id => id !== event.target.id);
      setListaFamiliasSelect(listaSinId);
      props.filtrarLista(listaSinId);
    }else{
      const listaIds=[...listaFamiliasSelect, event.target.id]
      setListaFamiliasSelect(listaIds);
      props.filtrarLista(listaIds);
    }
  }

  return (
    <div className="customCheckBoxHolder">
      {listaFamilias.map(listarFamiliasProf)}
    </div>
  );
};
export default ListaFamiliasProfesionales;
