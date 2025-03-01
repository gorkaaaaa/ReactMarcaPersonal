import { useEffect, useState } from "react";
import "./ListaFamiliasProf.css";
import { useForm } from "react-hook-form";
import useFamiliasProf from "../../../hooks/useFamiliasProf";

const ListaFamiliasProfesionales = (props) => {
  // Constante que almacena el resultado del fetch de familias profesionales
  const familiasProf = useFamiliasProf();

  // Estados de las listas, una para saber qué checkbox hemos seleccionado y otra
  // con todas las familias para poder mapearlas
  const [listaFamilias, setListaFamilias] = useState([]);
  const [listaFamiliasSelect, setListaFamiliasSelect] = useState([]);

  // Funcion para crear las listas
  function crearLista() {
    if (!familiasProf.buscando) {
      setListaFamilias(familiasProf.familiasProf);
    }
  }

  // Constante del campo del formulario
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

  //Con el watch monitorizamos los cambios en los campos del formulario
  const familiaSelect = watch(FAMILIA.FAMILIA);

  // Ejecuto la creación de la lista cada vez que .proyectos cambia para asegurarme de que se
  // han cargado todos
  useEffect(crearLista, familiasProf.familiasProf);

  // Funcion para mapear las familias profesionales en forma de checkboxes
  function listarFamiliasProf(familia) {
    return (
      <form>
        <div key={familia.id}>
          <input
            onClick={()=>{mostrarId(familia.id)}}
            className="customCheckBoxInput"
            id={familia.id}
            type="checkbox"
            value={familia.id}
            {...register(FAMILIA.FAMILIA)}
          ></input>
          <label htmlFor={familia.id} className="customCheckBoxWrapper">
            <div className="customCheckBox">
              <div className="inner">{familia.nombre}</div>
            </div>
          </label>
        </div>
        </form>
    );
  }

  // Funcion que recibirá el id del checkbox marcado y que posteriormente enviará a la función
  // filtrarLista el array con los ids que debe filtrar
  function mostrarId(id) {
    //  En caso de que la lista de familias seleccionadas ya contenga ese id, significa que la checkbox
    //  se está pulsando por segunda vez, por tanto, desmarcando, por lo que se eliminará del array usando la función filter
    //  y posteriormente pasará dicho array a la función recibida por props
    if (listaFamiliasSelect.includes(id)) {
      const listaSinId = listaFamiliasSelect.filter(
        (e) => e !== id
      );
      setListaFamiliasSelect(listaSinId);
      props.filtrarLista(listaSinId);
    } else {
      // en caso de que el id no exista se añade al array lo devolvemos a la función
      const listaIds = [...listaFamiliasSelect, id];
      setListaFamiliasSelect(listaIds);
      props.filtrarLista(listaIds);
    }
  }

  // Y se mapean todos los botones
  return (
    <div className="customCheckBoxHolder">
      {listaFamilias.map(listarFamiliasProf)}
    </div>
  );
};
export default ListaFamiliasProfesionales;
